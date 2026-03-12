<script setup>
import { computed, onMounted, reactive, ref, watch } from 'vue'

const STORAGE_KEY = 'reyhan.jira.board.v1'

const columns = [
  { id: 'todo', title: 'To do' },
  { id: 'in_progress', title: 'In progress' },
  { id: 'review', title: 'Review' },
  { id: 'done', title: 'Done' },
]

function createId() {
  if (typeof crypto !== 'undefined' && typeof crypto.randomUUID === 'function') {
    return crypto.randomUUID()
  }
  return `${Date.now()}_${Math.random().toString(16).slice(2)}`
}

function defaultBoardState() {
  return {
    ticketsByColumn: {
      todo: [],
      in_progress: [],
      review: [],
      done: [],
    },
  }
}

const state = reactive(defaultBoardState())

const newTitle = ref('')
const newColumnId = ref(columns[0].id)

const drag = reactive({
  ticketId: null,
  fromColumnId: null,
})

const allTicketsCount = computed(() =>
  columns.reduce((acc, c) => acc + state.ticketsByColumn[c.id].length, 0),
)

function persist() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state))
}

function load() {
  const raw = localStorage.getItem(STORAGE_KEY)
  if (!raw) return

  try {
    const parsed = JSON.parse(raw)
    if (!parsed?.ticketsByColumn) return

    for (const c of columns) {
      state.ticketsByColumn[c.id] = Array.isArray(parsed.ticketsByColumn[c.id])
        ? parsed.ticketsByColumn[c.id]
        : []
    }
  } catch {
    // ignore corrupted storage
  }
}

function addTicket() {
  const title = newTitle.value.trim()
  if (!title) return

  const columnId = newColumnId.value
  state.ticketsByColumn[columnId].unshift({
    id: createId(),
    title,
    createdAt: Date.now(),
  })

  newTitle.value = ''
}

function deleteTicket(columnId, ticketId) {
  state.ticketsByColumn[columnId] = state.ticketsByColumn[columnId].filter((t) => t.id !== ticketId)
}

function onDragStart(columnId, ticketId, e) {
  drag.ticketId = ticketId
  drag.fromColumnId = columnId
  e.dataTransfer?.setData('text/plain', JSON.stringify({ columnId, ticketId }))
  e.dataTransfer?.setDragImage?.(e.target, 12, 12)
}

function onDrop(targetColumnId, e) {
  let payload = null
  try {
    const raw = e.dataTransfer?.getData('text/plain')
    payload = raw ? JSON.parse(raw) : null
  } catch {
    payload = null
  }

  const fromColumnId = payload?.columnId ?? drag.fromColumnId
  const ticketId = payload?.ticketId ?? drag.ticketId
  if (!fromColumnId || !ticketId) return

  if (fromColumnId === targetColumnId) return

  const fromList = state.ticketsByColumn[fromColumnId] ?? []
  const idx = fromList.findIndex((t) => t.id === ticketId)
  if (idx === -1) return

  const [ticket] = fromList.splice(idx, 1)
  state.ticketsByColumn[targetColumnId].unshift(ticket)

  drag.ticketId = null
  drag.fromColumnId = null
}

onMounted(() => {
  load()
})

watch(
  () => state.ticketsByColumn,
  () => persist(),
  { deep: true },
)
</script>

<template>
  <div class="board">
    <div class="board__header">
      <div class="board__meta">
        <div class="board__subtitle">Tickets: {{ allTicketsCount }}</div>
      </div>

      <form class="board__add" @submit.prevent="addTicket">
        <input
          v-model="newTitle"
          class="board__input"
          placeholder="New ticket title…"
          maxlength="120"
          autocomplete="off"
        />
        <select v-model="newColumnId" class="board__select">
          <option v-for="c in columns" :key="c.id" :value="c.id">{{ c.title }}</option>
        </select>
        <MyCustomButton text="Add" color="#36B37E" icon="➕" :disabled="!newTitle.trim()" />
      </form>
    </div>

    <div class="board__grid">
      <section
        v-for="c in columns"
        :key="c.id"
        class="column"
        @dragover.prevent
        @drop="onDrop(c.id, $event)"
      >
        <header class="column__header">
          <div class="column__title">{{ c.title }}</div>
          <div class="column__count">{{ state.ticketsByColumn[c.id].length }}</div>
        </header>

        <div class="column__list">
          <article
            v-for="t in state.ticketsByColumn[c.id]"
            :key="t.id"
            class="ticket"
            draggable="true"
            @dragstart="onDragStart(c.id, t.id, $event)"
          >
            <div class="ticket__top">
              <div class="ticket__title">{{ t.title }}</div>
              <button class="ticket__delete" type="button" @click="deleteTicket(c.id, t.id)">
                ✕
              </button>
            </div>
            <div class="ticket__meta">ID: {{ String(t.id).slice(0, 8) }}</div>
          </article>

          <div v-if="state.ticketsByColumn[c.id].length === 0" class="column__empty">
            Drop tickets here
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<style scoped>
.board {
  display: grid;
  gap: 16px;
}

.board__header {
  display: grid;
  gap: 12px;
}

.board__add {
  display: grid;
  grid-template-columns: 1fr 180px auto;
  gap: 10px;
  align-items: center;
}

.board__input,
.board__select {
  height: 42px;
  border-radius: 10px;
  border: 1px solid #dfe1e6;
  padding: 0 12px;
  background: white;
  font-size: 14px;
}

.board__grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(220px, 1fr));
  gap: 14px;
  align-items: start;
}

.column {
  background: #f4f5f7;
  border: 1px solid #dfe1e6;
  border-radius: 14px;
  padding: 12px;
  min-height: 420px;
}

.column__header {
  display: flex;
  align-items: baseline;
  justify-content: space-between;
  gap: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #dfe1e6;
  margin-bottom: 10px;
}

.column__title {
  font-weight: 800;
}

.column__count {
  font-size: 12px;
  color: #5e6c84;
}

.column__list {
  display: grid;
  gap: 10px;
}

.column__empty {
  border: 1px dashed #c1c7d0;
  border-radius: 12px;
  padding: 14px;
  color: #5e6c84;
  background: #fff;
  text-align: center;
}

.ticket {
  background: #fff;
  border: 1px solid #dfe1e6;
  border-radius: 12px;
  padding: 12px;
  cursor: grab;
  box-shadow: 0 2px 6px rgba(9, 30, 66, 0.08);
}

.ticket:active {
  cursor: grabbing;
}

.ticket__top {
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 10px;
  align-items: start;
}

.ticket__title {
  font-weight: 700;
  line-height: 1.2;
}

.ticket__delete {
  width: 28px;
  height: 28px;
  border-radius: 8px;
  border: 1px solid #dfe1e6;
  background: #fff;
  cursor: pointer;
}

.ticket__delete:hover {
  background: #ffebe6;
  border-color: #ff5630;
}

.ticket__meta {
  margin-top: 8px;
  font-size: 12px;
  color: #5e6c84;
}

@media (max-width: 1100px) {
  .board__grid {
    grid-template-columns: repeat(2, minmax(220px, 1fr));
  }
}

@media (max-width: 650px) {
  .board__add {
    grid-template-columns: 1fr;
  }
  .board__grid {
    grid-template-columns: 1fr;
  }
}
</style>


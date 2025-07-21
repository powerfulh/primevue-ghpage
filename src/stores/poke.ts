import { Poke } from '@/util/poke/t'
import { defineStore } from 'pinia'
import { computed, Ref, ref } from 'vue'

export const usePokeStore = defineStore('Poke', () => {
	const saveData = ref({ p: null as Poke, l: 0, e: 0 })

	const loadable = computed(() => saveData.value.p)
	const name = computed(() => saveData.value.p?.ko + ' Lv ' + saveData.value.l)
	const sprite = computed(() => saveData.value.p?.sprites)
	const hp = computed(() => saveData.value.p?.stats.hp)
	const level = computed(() => saveData.value.l)

	return {
		loadable,
		name,
		sprite,
		hp,
		level,
		save(l: number, e: number, p: Poke) {
			saveData.value = {
				l,
				e,
				p,
			}
			// put todo
		},
		load(l: Ref<number>, e: Ref<number>, p: Ref<Poke>) {
			l.value = saveData.value.l
			e.value = saveData.value.e
			p.value = saveData.value.p
		},
		earnExp(e: number) {
			saveData.value.e += e
			if (saveData.value.e >= 100) {
				saveData.value.e = saveData.value.e - 100
				saveData.value.l++
			}
			this.save(saveData.value.l, saveData.value.e, saveData.value.p)
		},
	}
})

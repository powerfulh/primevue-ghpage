<script setup lang="ts">
import { Splitter, SplitterPanel } from 'primevue'
import ListItem from './ListItem.vue'
import { computed } from 'vue'

const testData = [
	{
		t: '이별 3갤 접어드는데도 힘들어',
		b: '맘이 식었대 언제부터였는지모르겠어 상대가 전문직이었는데 첨엔 모르고 만났고 늘 그에 비하면 부족하고 모자란 나라서 상대가 날 연애로만 생각하고 만날수도있겠다 생각하며 나도 첫연애라 크게 다치고싶지않아서 맘 크게 안열려했는데  연애가 길어질수록 나도 모르게 맘이 커져서 너무 의지를 했고 가족처럼 여겼나봐 헤어지자는데 정말 살점이 떨어지는거같았어 처음엔 모든게 내잘못같아서 시시티비 돌려보듯 날 계속 검열하고… 내가 덜서운하겠다고 덜 의존하겠다했는데 내가 잘못한게없대 난 너무 좋은사람이래 그게 더 아파  잘못한게있더라면 고쳐보겠는데 잘못',
	},
	{
		t: '연락한지',
		b: '3주됐고 3번 만났어 분위기 좋았고 재밌었는데 연락할 때 항상 보고식이야..뭐하는중~이런식으로 출퇴근 잘했냐 끼니는 먹었냐 이런 질문이 별로 없는데 이거 쫑난거? 나도 점점 흥미가 떨어지고 그러네ㅠ참고로 여자야',
	},
	{
		t: '얼굴 잘생긴 건 필요없으니까 성격 좋고 연락 잘되고 다정하고 좀 알콩달콩 한 일년 연애하다 결혼하고 싶다',
		b: '와 다들 결혼 어캐햇냐 ㅋㅋㅋㅋㅋㅋㅋㅋㅋ 아 물론 나이는 90년생 위로 넘어가면 안되고 키는 180 이상이어야하고 배 안나오고 여사친 없고 돌싱 안되고 술 유흥 안좋아해야함',
	},
	{
		t: '이런 사람 고칠 수 있어?',
		b: '20대 후반 남자인데 가족끼리 엄청 화목함 근데 엄마가 간섭을 너무 많이 하는 바람에 연애사실을 한 번도 알린적이 없어서 모솔인줄 아신대 누나도 남친 있는거 몇번 들켰는데 꼬치꼬치 캐묻고 헤어지라고 난리치다가, 누나 남친이 선물을 갖다바쳤더니 그래도 놈팽이가 아닌 이름으로 불러주기 시작했대  내가 차로 집 앞 픽업갈때도 가족들이 보면 큰일난다고 멀리로 데리러오라고 하더라고 크리스마스나 연휴때도 무조건 가족들이랑 시간보내야지 안그러면 부모님 서운해하신다고 하네  가정이 화목하면 원래 이러는건지 아니면 그냥 마마보이인건지 모르겠음ㅋㅋㅋ',
	},
	{
		t: '외모 별로라 생각했던 여자가 예뻐 보였던 터닝포인트',
		b: '뭐가 있었어?',
	},
	{
		t: '하루에 2~3시간밖에 못자면',
		b: '한방에 훅갈 수 있는 거야?',
	},
]

const list = computed(() =>
	testData.reduce(
		(r, item) => {
			r.at(-1).push(item)
			if (r.at(-1).length == 2) r.push([])
			return r
		},
		[[]],
	),
)
</script>

<template>
	<main>
		검색어 todo
		<div class="card">
			<Splitter v-for="(couple, i) in list" :key="i" style="margin-bottom: 4px">
				<SplitterPanel
					v-for="(item, ii) in couple"
					:key="ii"
					class="items-center justify-center"
					style="padding: 8px; display: flex; flex-direction: column"
				>
					<ListItem :item="item" />
				</SplitterPanel>
			</Splitter>
		</div>
	</main>
</template>

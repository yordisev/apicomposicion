import { onMounted, ref } from 'vue'
export function useFetch(url) {
    const ArrayPaises = ref([])

    onMounted(async() => {
        try {
            const res = await fetch(url)
            ArrayPaises.value = await res.json()
        } catch (error) {
            console.log(error)
        }
    })

    return { ArrayPaises }
}
import axios from 'axios'
import { inject } from 'vue'

export async function apiRequest<T>(endpoint: string): Promise<T> {
    const baseUrl = inject('baseUrl')
    const { data } = await axios.get<T>(baseUrl + endpoint)

    return data
}

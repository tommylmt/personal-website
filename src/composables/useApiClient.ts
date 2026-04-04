import { inject } from 'vue'
import axios from 'axios'

export function useApiClient() {
    const baseUrl = inject<string>('baseUrl')

    return {
        apiRequest: async <T>(endpoint: string): Promise<T> => {
            const { data } = await axios.get<T>(baseUrl + endpoint)
            return data
        }
    }
}

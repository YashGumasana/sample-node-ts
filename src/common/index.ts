export class apiResponse {
    private status: number | null
    private message: string | null
    private data: any | null
    private error: any | null
    constructor(status: number, message: string, data: any, error: any) {
        this.status = status
        this.message = message
        this.data = data
        this.error = error
    }
}


export const userStatus = {
    user: 0,
    seller: 1,
}

export const genderStatus = {
    Male: 0,
    Female: 1
}
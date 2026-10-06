export type User = {
    success: boolean,
    message: {
        _id: string,
        username: string,
        email: string,
        role: string,
        assignedArea: string
    }
}
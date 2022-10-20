import { Mail } from './redux/mailSlice'

const baseUrl = 'http://localhost:3333/mail';

export const fetchNewMail = async (data: Mail) => {
    const savedMail: Promise<Mail> = await fetch(`${baseUrl}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }).then(response => {
        if(!response.ok) {
            throw Error(response.statusText)
        }
        return response.json()
    })
    return savedMail
}
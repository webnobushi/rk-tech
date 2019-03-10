/**
 * @see https://api.slack.com/incoming-webhooks
 * @see https://api.slack.com/docs/messages/builder
 */
import axios from 'axios'
import { sleep } from '@/assets/js/util'

const client = axios.create({
  baseURL: 'https://hooks.slack.com',
  headers: { 'content-type': 'application/x-www-form-urlencoded' },
  timeout: 30000,
})

export async function sendMessage(message) {
  const params = {
    attachments: [message].map(message => ({
      pretext: message.pretext || '',
      color: '#00c0ef',
      fields: [
        {
          title: message.title,
          value: message.text,
        }
      ],
    })),
  }

  await sleep(1000)

  return client.post(
    'services/TA2B8HS69/BG9FJNCD9/yWNi9rgwACP8VbbClITASExh',
    params
  )
}

export function contactMessageTemplate(...args) {
  return {
    pretext: '問い合わせを受信しました',
    title: `${args[0]} 様からのお問い合わせ`,
    text: `お問い合わせの種類: ${args[1]}\nメールアドレス: ${args[2]}\n内容：\n${args[3]}`
  }
}


export function successMessageTemplate(...args) {
  return [
    `${args[0]} 様`,
    'お問い合わせありがとうございました。',
    '折り返しご連絡いたしますので少々お待ちください。',
  ]
}

export function failedMessageTemplate() {
  return [
    `送信に失敗しました。`,
    '申し訳ございませんが下記宛先まで直接お問い合わせをお願いいたします。',
    '',
    'webnobushi@gmail.com',
  ]
}


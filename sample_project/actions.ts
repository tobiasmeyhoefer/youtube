"use server"

import { z } from "zod"

const schema = z.object({
  username: z.string().min(3).max(20),
})

export default async function handleSubmit(formdata: FormData) {

  const result = schema.safeParse({
    username: formdata.get("username"),
  })

  console.log(result.data?.username)
}
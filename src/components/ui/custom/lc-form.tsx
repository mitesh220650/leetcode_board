"use client"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"

const formSchema = z.object({
  problemId: z.string().regex(/^\d+$/, {
    message: "Problem ID must be a number.",
  }),
})

export function LeetCodeForm() {
  const router = useRouter()

  // Define your form.
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      problemId: "",
    },
  })

  // Define a submit handler.
  const onSubmit = (values: z.infer<typeof formSchema>) => {
    // Redirect to the problem page with the entered problem ID .
    router.push(`/problems/${values.problemId}`)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="problemId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Problem ID</FormLabel>
              <FormControl>
                <Input placeholder="Enter Problem ID" {...field} />
              </FormControl>
              <FormDescription>
                Enter the ID of the problem you want to view.
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Go</Button>
      </form>
    </Form>
  )
}

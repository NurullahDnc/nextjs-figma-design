"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { contactSchema, ContactValues } from "@/lib/validation";
import { Button } from "../ui/button";
import Title from "../Title";
import { useToast } from "@/hooks/use-toast";

export default function ContactForm() {
  const { toast } = useToast();

  const form = useForm<ContactValues>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      sureName: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  async function onSubmit(values: ContactValues) {

    console.log("data :", values);
    
    toast({
      title: "Merhaba Hoş Geldiniz.",
    });

    form.reset();
  }

  return (
    <Form {...form}>
      <Title title="Contact Us" />
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="md:w-5/6 mx-auto md:px-10 pb-10 space-y-5 "
      >
        <div className="grid grid-cols-1 md:grid-cols-2 space-y-5 md:space-y-0 md:space-x-5">
          <FormField
            control={form.control}
            name="sureName"
            render={({ field }) => (
              <FormItem>
                <h3 className="text-sm font-semibold">Ad Soyad</h3>
                <FormControl>
                  <Input
                    placeholder="Adınızı ve soyadınızı girin"
                    {...field}
                    className="bg-bgInput bg-opacity-10 "
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <h3 className="text-sm font-semibold">E-posta</h3>
                <FormControl>
                  <Input
                    placeholder="E-posta adresinizi girin"
                    {...field}
                    className="bg-bgInput bg-opacity-10 "
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <h3 className="text-sm font-semibold">Konu</h3>
              <FormControl>
                <Input
                  placeholder="Mesaj konusu"
                  {...field}
                  className="bg-bgInput bg-opacity-10 "
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <h3 className="text-sm font-semibold">Mesaj</h3>
              <FormControl>
                <Textarea
                  placeholder="Mesajınızı buraya yazın..."
                  {...field}
                  className="bg-bgInput bg-opacity-10 "
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button className=" px-10 py-6 bg-primary text-white  ">Gönder</Button>
      </form>
    </Form>
  );
}

"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { PiSmiley } from "react-icons/pi";
import Navbar from "@/components/Navbar";

const FormSchema = z.object({
  first_name: z.string(),
  last_name: z.string(),
  email: z.string().email(),
  company_name: z.string(),
  help: z.enum([
    "Evaluate Noctua Webworks for my company",
    "Learn More",
    "Get a Quote",
    "Other",
  ]),
  services: z.enum([
    "Website Development",
    "App Development",
    "Shopify Theme Development",
    "Shopify Theme Customization",
    "Shopify App Development",
    "WordPress Website Development",
    "WordPress Website with Elementor",
    "WordPress E-commerce Website",
    "Shopify to WordPress Migration",
    "Shopify to Any Stack Migration",
    "WordPress to Shopify Migration",
    "WordPress to Any Stack Migration",
  ]),
  info: z.string(),
  terms: z.boolean().default(false),
});

type FormValues = z.infer<typeof FormSchema>;

export default function ContactForm() {
  const showNavItem = false;
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      company_name: "",
      help: "Learn More",
      services: "Website Development",
      info: "",
      terms: false,
    },
  });

  async function onSubmit(data: FormValues) {
    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Something went wrong");
      setSubmitted(true);
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error",
        description: "Something went wrong",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar
        scrollToWebsiteDesign={() => {}}
        scrollToGraphicDesign={() => {}}
        scrollToShopifyStores={() => {}}
        scrollToBrands={() => {}}
        scrollToServices={() => {}}
        showNavItem={showNavItem}
      />

      <div className="md:flex items-start justify-center md:py-20 px-6">
        <div>
          <div className="text-5xl font-medium w-full md:w-2/3 pb-5 md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Contact our sales team
          </div>
          <div className="py-4 text-gray-300">
            Let&apos;s talk about how Noctua Webworks can help your team work better.
          </div>

          <div className="bg-[#f6f5f4] md:w-4/5 space-y-6 p-4 rounded-2xl my-4 hidden md:flex md:flex-col">
            <div className="flex gap-4 border-b">
              <div className="font-normal pb-4">
                One flexible agency for your entire company to share knowledge,
                ship projects, and collaborate.
              </div>
            </div>

            <div className="flex gap-4 border-b">
              <div className="font-normal pb-4">
                Enterprise features to securely manage user access and security.
              </div>
            </div>

            <div className="flex gap-4">
              <div className="font-normal pb-4">
                Dedicated support to work with you on your setup and help you
                build the best plan for your company.
              </div>
            </div>
          </div>
        </div>

        <Form {...form}>
          {!submitted ? (
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 h-full border rounded-3xl p-10 md:w-1/3">
              <div className="md:flex items-center gap-6">
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-sm text-white">First name *</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-sm text-white">Last name *</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm text-white">Email *</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

          

              <FormField
                control={form.control}
                name="company_name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm text-white">Company name</FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="services"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm text-white">Services you are interested in</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {FormSchema.shape.services._def.values.map((service) => (
                          <SelectItem key={service} value={service}>
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="help"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm text-white">How can we help?</FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {FormSchema.shape.help._def.values.map((option) => (
                          <SelectItem key={option} value={option}>
                            {option}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="info"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm text-white">Message</FormLabel>
                    <FormControl>
                      <Textarea style={{ height: "100px" }} {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="terms"
                render={({ field }) => (
                  <FormItem className="flex items-center space-x-2">
                    <FormControl>
                      <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                        className="border-2"
                      />
                    </FormControl>
                    <FormLabel className="text-xs font-light text-white">
                      I agree to Noctua Webworks&apos; marketing communications.
                    </FormLabel>
                  </FormItem>
                )}
              />

              <Button type="submit" disabled={loading} className="text-sm font-light">
                Submit
              </Button>
            </form>
          ) : (
            <div className="text-xl md:text-2xl flex items-center justify-center flex-col px-8">
              <div className="w-80 py-20">
                <PiSmiley className="text-6xl text-[#6c6684] mx-auto" />
                <div className="text-gray-500 font-light text-center py-10">
                  We&apos;ve received your inquiry and will be contacting you via email shortly.
                </div>
              </div>
            </div>
          )}
        </Form>
      </div>
    </div>
  );
}

"use client";
import { motion } from "framer-motion";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Mail, Phone, Instagram, Send } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { fadeInUp, staggerContainer } from "@/utils/animations";
import { contactFormSchema, type ContactFormValues } from "@/utils/validations";
import contact from "@/assets/lotties/contact.json";
import Lottie from "lottie-react";
import { useTranslations } from "next-intl";

export const Contact = () => {
  const t = useTranslations("Contact");
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      eventType: "",
      message: "",
    },
  });

  const onSubmit = (data: ContactFormValues) => {
    console.log("Form data:", data);
    toast.success(t("form.success"), {
      description: t("form.successDescription"),
    });
    form.reset();
  };

  return (
    <section className="py-20 bg-secondary/20">
      <Container>
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          variants={staggerContainer}
          className="max-w-5xl mx-auto"
        >
          <motion.div variants={fadeInUp} className="text-center mb-12">
            <div className="w-60 h-60 mx-auto">
              <Lottie animationData={contact} loop={true} />
            </div>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              {t("title")}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t("subtitle")}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="bg-card rounded-2xl p-8 shadow-soft">
                <h3 className="font-display text-2xl font-bold mb-6">
                  {t("contactInfo")}
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{t("phone")}</p>
                      <p className="text-sm text-muted-foreground">
                        +54 9 11 1234-5678
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{t("email")}</p>
                      <p className="text-sm text-muted-foreground">
                        hola@Invitly.com
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Instagram className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">{t("instagram")}</p>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-primary hover:underline"
                      >
                        @Invitly
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8">
                <h4 className="font-semibold text-lg mb-2">
                  {t("hoursTitle")}
                </h4>
                <p
                  className="text-sm text-muted-foreground mb-4"
                  style={{ whiteSpace: "pre-line" }}
                >
                  {t("hours")}
                </p>
                <p className="text-xs text-muted-foreground">
                  {t("responseTime")}
                </p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Form {...form}>
                <form
                  onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6 bg-card rounded-2xl p-8 shadow-soft"
                >
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("form.name")}</FormLabel>
                        <FormControl>
                          <Input
                            placeholder={t("form.namePlaceholder")}
                            {...field}
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
                        <FormLabel>{t("form.email")}</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder={t("form.emailPlaceholder")}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="eventType"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("form.eventType")}</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue
                                placeholder={t("form.eventTypePlaceholder")}
                              />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="boda">
                              {t("form.eventTypes.boda")}
                            </SelectItem>
                            <SelectItem value="quince">
                              {t("form.eventTypes.quince")}
                            </SelectItem>
                            <SelectItem value="babyshower">
                              {t("form.eventTypes.babyshower")}
                            </SelectItem>
                            <SelectItem value="cumpleanos">
                              {t("form.eventTypes.cumpleanos")}
                            </SelectItem>
                            <SelectItem value="corporativo">
                              {t("form.eventTypes.corporativo")}
                            </SelectItem>
                            <SelectItem value="otro">
                              {t("form.eventTypes.otro")}
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>{t("form.message")}</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder={t("form.messagePlaceholder")}
                            rows={5}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    className="w-full shadow-elegant"
                    size="lg"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    {t("form.submit")}
                  </Button>
                </form>
              </Form>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};
export default Contact;

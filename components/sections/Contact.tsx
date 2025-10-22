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
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { contactFormSchema, type ContactFormValues } from "@/lib/validations";
import contact from "@/assets/lotties/contact.json";
import Lottie from "lottie-react";

export const Contact = () => {
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
    toast.success("¡Mensaje enviado!", {
      description: "Nos pondremos en contacto contigo pronto.",
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
              Contactanos
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              ¿Tenés alguna duda? No dudés en consultarnos. Nuestra idea es
              ayudarte a crear la invitacion perfecta para tu evento
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div variants={fadeInUp} className="space-y-6">
              <div className="bg-card rounded-2xl p-8 shadow-soft">
                <h3 className="font-display text-2xl font-bold mb-6">
                  Información de contacto
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Phone className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium">Teléfono / WhatsApp</p>
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
                      <p className="font-medium">Email</p>
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
                      <p className="font-medium">Instagram</p>
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
                  Horarios de atención
                </h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Lunes a Viernes: 9:00 - 18:00
                  <br />
                  Sábados: 10:00 - 14:00
                </p>
                <p className="text-xs text-muted-foreground">
                  Respuesta promedio en menos de 24 horas
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
                        <FormLabel>Nombre completo</FormLabel>
                        <FormControl>
                          <Input placeholder="Tu nombre" {...field} />
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
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            placeholder="tu@email.com"
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
                        <FormLabel>Tipo de evento</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecciona un tipo de evento" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="boda">Boda</SelectItem>
                            <SelectItem value="quince">15 Años</SelectItem>
                            <SelectItem value="babyshower">
                              Baby Shower
                            </SelectItem>
                            <SelectItem value="cumpleanos">
                              Cumpleaños
                            </SelectItem>
                            <SelectItem value="corporativo">
                              Corporativo
                            </SelectItem>
                            <SelectItem value="otro">Otro</SelectItem>
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
                        <FormLabel>Mensaje</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Cuéntanos sobre tu evento..."
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
                    Enviar mensaje
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

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Gift, Lightbulb } from "lucide-react";

interface LessonProps {
  onComplete: () => void;
  isCompleted: boolean;
}

export const Lesson2_1 = ({ onComplete, isCompleted }: LessonProps) => (
    <Card>
        <CardHeader>
            <div className="flex items-center justify-between">
                <div>
                    <CardTitle className="text-2xl flex items-center gap-3">
                        <Gift className="h-6 w-6 text-primary" />
                        Lección 2.1 – Qué puedes hacer gratis con la IA (y qué no)
                    </CardTitle>
                    <CardDescription className="mt-2">
                        Conocer los límites reales de las versiones gratuitas, cómo sortearlos y qué puedes lograr sin pagar.
                    </CardDescription>
                </div>
                <Button variant={isCompleted ? "default" : "outline"} onClick={onComplete}>
                    {isCompleted ? <><CheckCircle className="mr-2 h-4 w-4" />Completada</> : "Marcar como completada"}
                </Button>
            </div>
        </CardHeader>
        <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
                <div className="prose prose-sm max-w-none dark:prose-invert">
                    <h3 className="font-semibold text-green-400">🎁 Lo que puedes hacer gratis hoy mismo:</h3>
                    <ul className="list-disc list-inside space-y-2 mt-4">
                        <li>Escribir textos, resúmenes, emails, ideas</li>
                        <li>Crear imágenes, logos, carteles</li>
                        <li>Generar vídeos cortos desde texto</li>
                        <li>Crear voces y narraciones</li>
                        <li>Leer y resumir PDFs</li>
                        <li>Automatizar tareas básicas</li>
                    </ul>
                </div>
                <div className="prose prose-sm max-w-none dark:prose-invert">
                    <h3 className="font-semibold text-red-400">⛔ Lo que normalmente no puedes hacer gratis:</h3>
                    <ul className="list-disc list-inside space-y-2 mt-4">
                        <li>Vídeos largos o en HD</li>
                        <li>Generaciones ilimitadas</li>
                        <li>Procesamiento avanzado de datos</li>
                        <li>Acceso a los modelos más potentes (GPT-4, Claude Opus, etc.)</li>
                    </ul>
                </div>
            </div>
            
            <Card className="bg-gradient-subtle border-primary/20">
                <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                        <Lightbulb className="h-5 w-5 text-primary" />
                        Trucos para maximizar la IA gratuita
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="list-disc list-inside space-y-2">
                        <li><strong>Usa múltiples cuentas:</strong> Si una herramienta te da un límite diario, puedes usar diferentes correos.</li>
                        <li><strong>Mezcla herramientas:</strong> Combina lo mejor de cada una. Usa una para texto, otra para imagen y una tercera para voz.</li>
                        <li><strong>Aprovecha los créditos gratuitos:</strong> Muchas plataformas te dan "tokens" gratis cada día o mes. ¡No los desperdicies!</li>
                    </ul>
                </CardContent>
            </Card>
        </CardContent>
    </Card>
);

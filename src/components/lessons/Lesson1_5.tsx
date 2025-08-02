import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Lightbulb, FlaskConical, MessageSquare, CheckCircle } from "lucide-react";

interface LessonProps {
  onComplete: () => void;
  isCompleted: boolean;
}

export const Lesson1_5 = ({ onComplete, isCompleted }: LessonProps) => (
    <div className="space-y-6">
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div>
                        <CardTitle className="text-2xl flex items-center gap-3">
                            <MessageSquare className="h-6 w-6 text-primary" />
                            Lección 1.5 – ¿Qué es un prompt y por qué importa tanto?
                        </CardTitle>
                        <CardDescription className="mt-2">
                            Comprender qué es un “prompt” y aprender a escribir mejores instrucciones para obtener mejores resultados.
                        </CardDescription>
                    </div>
                    <Button variant={isCompleted ? "default" : "outline"} onClick={onComplete}>
                        {isCompleted ? <><CheckCircle className="mr-2 h-4 w-4" />Completada</> : "Marcar como completada"}
                    </Button>
                </div>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="prose prose-sm max-w-none dark:prose-invert">
                    <p className="text-lg">
                        🗣️ Un <strong>prompt</strong> es simplemente lo que tú escribes o le pides a la IA.
                    </p>
                    <p>
                        Pero… no todos los prompts son igual de buenos.
                    </p>
                     <p className="border-l-4 border-destructive pl-4">
                        La IA no adivina lo que piensas. <strong>Cuanto más claro eres, mejor trabaja.</strong>
                    </p>
                    
                    <h4>Mal prompt:</h4>
                    <div className="bg-destructive/10 p-4 rounded-lg border border-destructive/20 font-mono text-sm text-destructive-foreground">
                        Hazme una presentación.
                    </div>

                    <h4 className="mt-4">Buen prompt:</h4>
                    <div className="bg-primary/10 p-4 rounded-lg border border-primary/20 font-mono text-sm">
                        Haz una presentación de 5 diapositivas para explicar los beneficios del marketing digital a personas mayores de 50 años, usando un lenguaje sencillo y ejemplos cotidianos.
                    </div>
                </div>

                <Card className="bg-accent/10 border-accent/20">
                    <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                            <Lightbulb className="h-5 w-5 text-accent" />
                            Consejos para hacer buenos prompts:
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="list-disc list-inside space-y-2">
                            <li><strong>Sé específico:</strong> tema, objetivo, formato.</li>
                            <li><strong>Indica tono, público o estilo.</strong></li>
                            <li><strong>Da contexto:</strong> ¿quién eres tú?, ¿para quién lo haces?</li>
                            <li><strong>Añade ejemplos</strong> si puedes.</li>
                            <li><strong>No tengas miedo de corregir:</strong> es un diálogo, no un examen.</li>
                        </ul>
                    </CardContent>
                </Card>

                <Card className="bg-gradient-subtle border-primary/20">
                    <CardHeader>
                        <CardTitle className="text-lg flex items-center gap-2">
                            <FlaskConical className="h-5 w-5 text-primary" />
                            Ejercicio práctico
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>Escribe el peor prompt que se te ocurra y luego intenta mejorarlo.</p>
                        <p className="mt-2">Comparte antes y después en la comunidad.</p>
                    </CardContent>
                </Card>
            </CardContent>
        </Card>
    </div>
);

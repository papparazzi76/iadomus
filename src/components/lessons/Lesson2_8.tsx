import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Rocket, Sparkles } from "lucide-react";

interface LessonProps {
  onComplete: () => void;
  isCompleted: boolean;
}

export const Lesson2_8 = ({ onComplete, isCompleted }: LessonProps) => (
    <Card>
        <CardHeader>
            <div className="flex items-center justify-between">
                <div>
                    <CardTitle className="text-2xl flex items-center gap-3">
                        <Rocket className="h-6 w-6 text-primary" />
                        Lección 2.8 – Tu primer proyecto IA gratis
                    </CardTitle>
                    <CardDescription className="mt-2">
                        Combinar todo lo aprendido para hacer un mini proyecto sin gastar nada.
                    </CardDescription>
                </div>
                 <Button variant={isCompleted ? "default" : "outline"} onClick={onComplete}>
                    {isCompleted ? <><CheckCircle className="mr-2 h-4 w-4" />Completada</> : "Marcar como completada"}
                </Button>
            </div>
        </CardHeader>
        <CardContent className="space-y-6">
            <Card className="bg-gradient-subtle border-primary/20">
                <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-primary" />
                        Proyecto: "Crea tu propio personaje virtual"
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="font-semibold mb-4">Pasos a seguir:</p>
                    <ol className="list-decimal list-inside space-y-2">
                        <li>Usa <strong>ChatGPT</strong> para crear la historia y personalidad del personaje.</li>
                        <li>Genera su imagen con <strong>Ideogram</strong> o Leonardo.</li>
                        <li>Crea su voz narrando la historia con <strong>ElevenLabs</strong>.</li>
                        <li>Monta una presentación o vídeo simple con <strong>Canva</strong>.</li>
                        <li>(Opcional) Usa <strong>Make</strong> para automatizar el envío de la presentación por email.</li>
                    </ol>
                    <div className="mt-6 p-4 bg-card rounded-lg border">
                        <h4 className="font-semibold">Entregable final</h4>
                        <p className="text-sm text-muted-foreground">Un personaje IA completo con imagen, texto y voz, listo para compartir en la comunidad y recibir feedback.</p>
                    </div>
                </CardContent>
            </Card>
        </CardContent>
    </Card>
);

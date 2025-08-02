import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Video, FlaskConical } from "lucide-react";

interface LessonProps {
  onComplete: () => void;
  isCompleted: boolean;
}

export const Lesson2_4 = ({ onComplete, isCompleted }: LessonProps) => (
    <Card>
        <CardHeader>
            <div className="flex items-center justify-between">
                <div>
                    <CardTitle className="text-2xl flex items-center gap-3">
                        <Video className="h-6 w-6 text-primary" />
                        Lección 2.4 – Generar vídeos IA gratis (sin ser editor)
                    </CardTitle>
                    <CardDescription className="mt-2">
                        Probar herramientas para crear vídeos sin saber de edición.
                    </CardDescription>
                </div>
                <Button variant={isCompleted ? "default" : "outline"} onClick={onComplete}>
                    {isCompleted ? <><CheckCircle className="mr-2 h-4 w-4" />Completada</> : "Marcar como completada"}
                </Button>
            </div>
        </CardHeader>
        <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-4">
                    <CardTitle className="text-lg">RunwayML</CardTitle>
                    <p className="text-sm text-muted-foreground">Genera vídeos cortos a partir de texto o de otras imágenes.</p>
                </Card>
                <Card className="p-4">
                    <CardTitle className="text-lg">Pika</CardTitle>
                    <p className="text-sm text-muted-foreground">Ideal para vídeos con estilo de animación o motion graphics.</p>
                </Card>
            </div>
            <Card className="bg-gradient-subtle border-primary/20">
                <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2"><FlaskConical className="h-5 w-5 text-primary" />Sugerencia de prompt para Pika</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="mb-4">Prueba a generar un vídeo con esta instrucción:</p>
                    <div className="bg-card p-4 rounded-lg border font-mono text-sm">
                        Un robot que planta árboles en un bosque destruido por el fuego, estilo animado
                    </div>
                </CardContent>
            </Card>
        </CardContent>
    </Card>
);

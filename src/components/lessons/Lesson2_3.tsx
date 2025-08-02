import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Image as ImageIcon, FlaskConical } from "lucide-react";

interface LessonProps {
  onComplete: () => void;
  isCompleted: boolean;
}

export const Lesson2_3 = ({ onComplete, isCompleted }: LessonProps) => (
    <Card>
        <CardHeader>
             <div className="flex items-center justify-between">
                <div>
                    <CardTitle className="text-2xl flex items-center gap-3">
                        <ImageIcon className="h-6 w-6 text-primary" />
                        Lección 2.3 – Crear imágenes gratis sin Midjourney
                    </CardTitle>
                    <CardDescription className="mt-2">
                        Aprender a generar imágenes con IA sin pagar ni usar Discord.
                    </CardDescription>
                </div>
                <Button variant={isCompleted ? "default" : "outline"} onClick={onComplete}>
                    {isCompleted ? <><CheckCircle className="mr-2 h-4 w-4" />Completada</> : "Marcar como completada"}
                </Button>
            </div>
        </CardHeader>
        <CardContent className="space-y-6">
            <div className="grid md:grid-cols-3 gap-4">
                <Card className="p-4"><CardTitle className="text-lg">Ideogram</CardTitle><p className="text-sm text-muted-foreground">Letras perfectas, carteles. Visita <a href="https://ideogram.ai" target="_blank" rel="noopener noreferrer" className="text-primary underline">ideogram.ai</a></p></Card>
                <Card className="p-4"><CardTitle className="text-lg">Leonardo AI</CardTitle><p className="text-sm text-muted-foreground">Estilo ilustrado, profesional. Visita <a href="https://leonardo.ai" target="_blank" rel="noopener noreferrer" className="text-primary underline">leonardo.ai</a></p></Card>
                <Card className="p-4"><CardTitle className="text-lg">Bing Creator</CardTitle><p className="text-sm text-muted-foreground">Rápido, sin instalar nada. Visita <a href="https://bing.com/images/create" target="_blank" rel="noopener noreferrer" className="text-primary underline">bing.com/images/create</a></p></Card>
            </div>
            <Card className="bg-gradient-subtle border-primary/20">
                <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2"><FlaskConical className="h-5 w-5 text-primary" />Ejercicio práctico</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="mb-4">Crea una ilustración para un post de Instagram con el texto:</p>
                    <div className="bg-card p-4 rounded-lg border font-mono text-sm">
                        "Domina la IA sin volverte loco"
                    </div>
                </CardContent>
            </Card>
        </CardContent>
    </Card>
);

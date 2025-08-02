import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Mic, FlaskConical } from "lucide-react";

interface LessonProps {
  onComplete: () => void;
  isCompleted: boolean;
}

export const Lesson2_5 = ({ onComplete, isCompleted }: LessonProps) => (
    <Card>
        <CardHeader>
            <div className="flex items-center justify-between">
                <div>
                    <CardTitle className="text-2xl flex items-center gap-3">
                        <Mic className="h-6 w-6 text-primary" />
                        Lección 2.5 – Crear voces y narraciones sin coste
                    </CardTitle>
                    <CardDescription className="mt-2">
                        Hacer que cualquier texto hable con voz humana, sin pagar.
                    </CardDescription>
                </div>
                <Button variant={isCompleted ? "default" : "outline"} onClick={onComplete}>
                    {isCompleted ? <><CheckCircle className="mr-2 h-4 w-4" />Completada</> : "Marcar como completada"}
                </Button>
            </div>
        </CardHeader>
        <CardContent className="space-y-6">
             <div className="grid md:grid-cols-3 gap-4">
                <Card className="p-4"><CardTitle className="text-lg">ElevenLabs</CardTitle><p className="text-sm text-muted-foreground">Ofrece una voz muy natural, ideal para cuentos o podcasts.</p></Card>
                <Card className="p-4"><CardTitle className="text-lg">Play.ht</CardTitle><p className="text-sm text-muted-foreground">Bueno para locuciones, aunque puede sonar un poco más robótico.</p></Card>
                <Card className="p-4"><CardTitle className="text-lg">Narakeet</CardTitle><p className="text-sm text-muted-foreground">Perfecto para voces narrativas rápidas y sencillas.</p></Card>
            </div>
            <Card className="bg-gradient-subtle border-primary/20">
                <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2"><FlaskConical className="h-5 w-5 text-primary" />Reto práctico</CardTitle>
                </CardHeader>
                <CardContent>
                    <p>Usa ChatGPT para escribir una historia corta (3 párrafos) y luego conviértela en un audio narrado con la herramienta gratuita de ElevenLabs.</p>
                </CardContent>
            </Card>
        </CardContent>
    </Card>
);

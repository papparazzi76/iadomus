import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, FileText, FlaskConical } from "lucide-react";

interface LessonProps {
  onComplete: () => void;
  isCompleted: boolean;
}

export const Lesson2_6 = ({ onComplete, isCompleted }: LessonProps) => (
    <Card>
        <CardHeader>
            <div className="flex items-center justify-between">
                <div>
                    <CardTitle className="text-2xl flex items-center gap-3">
                        <FileText className="h-6 w-6 text-primary" />
                        Lección 2.6 – Leer y resumir PDFs gratis con IA
                    </CardTitle>
                    <CardDescription className="mt-2">
                        Aprender a subir un PDF largo y obtener un resumen útil.
                    </CardDescription>
                </div>
                <Button variant={isCompleted ? "default" : "outline"} onClick={onComplete}>
                    {isCompleted ? <><CheckCircle className="mr-2 h-4 w-4" />Completada</> : "Marcar como completada"}
                </Button>
            </div>
        </CardHeader>
        <CardContent className="space-y-6">
             <div className="grid md:grid-cols-3 gap-4">
                <Card className="p-4"><CardTitle className="text-lg">AskYourPDF</CardTitle><p className="text-sm text-muted-foreground">Permite chatear y hacer preguntas directamente sobre el contenido del PDF.</p></Card>
                <Card className="p-4"><CardTitle className="text-lg">Humata</CardTitle><p className="text-sm text-muted-foreground">Ideal para leer, resumir y analizar documentos técnicos o largos.</p></Card>
                <Card className="p-4"><CardTitle className="text-lg">Claude AI</CardTitle><p className="text-sm text-muted-foreground">Aunque su web está en inglés, es excelente para leer PDFs muy extensos.</p></Card>
            </div>
            <Card className="bg-gradient-subtle border-primary/20">
                <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2"><FlaskConical className="h-5 w-5 text-primary" />Reto: Revisa un contrato</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="mb-4">Sube un manual, un contrato o cualquier documento largo a una de estas herramientas y pregúntale:</p>
                    <div className="bg-card p-4 rounded-lg border font-mono text-sm">
                        "¿Qué cláusulas debería revisar con atención?"
                    </div>
                </CardContent>
            </Card>
        </CardContent>
    </Card>
);

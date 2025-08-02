import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, Settings, Link2 } from "lucide-react";

interface LessonProps {
  onComplete: () => void;
  isCompleted: boolean;
}

export const Lesson2_7 = ({ onComplete, isCompleted }: LessonProps) => (
    <Card>
        <CardHeader>
            <div className="flex items-center justify-between">
                <div>
                    <CardTitle className="text-2xl flex items-center gap-3">
                        <Settings className="h-6 w-6 text-primary" />
                        Lección 2.7 – Automatizar cosas gratis con IA
                    </CardTitle>
                    <CardDescription className="mt-2">
                        Crear tu primer flujo automático con Make o N8N sin saber programar.
                    </CardDescription>
                </div>
                 <Button variant={isCompleted ? "default" : "outline"} onClick={onComplete}>
                    {isCompleted ? <><CheckCircle className="mr-2 h-4 w-4" />Completada</> : "Marcar como completada"}
                </Button>
            </div>
        </CardHeader>
        <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
                <Card className="p-4"><CardTitle className="text-lg">Make</CardTitle><p className="text-sm text-muted-foreground">Ideal para conectar formularios, correos, Google Drive y cientos de apps.</p></Card>
                <Card className="p-4"><CardTitle className="text-lg">N8N</CardTitle><p className="text-sm text-muted-foreground">Más técnico, perfecto para automatizar bases de datos o CRMs locales.</p></Card>
            </div>
             <Card className="bg-gradient-subtle border-primary/20">
                <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2"><Link2 className="h-5 w-5 text-primary" />Ejemplo de flujo simple</CardTitle>
                </CardHeader>
                <CardContent>
                   <p>Un flujo básico que puedes crear gratis es:</p>
                   <p className="font-mono text-sm mt-2 p-4 bg-card rounded-lg border">
                       <strong>[Cuando alguien rellena un formulario]</strong> → <strong>[Se envía un email de respuesta automático]</strong> → <strong>[El contacto se guarda en Google Sheets]</strong>
                   </p>
                </CardContent>
            </Card>
        </CardContent>
    </Card>
);

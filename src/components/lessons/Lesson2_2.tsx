import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, MessageSquare } from "lucide-react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

interface LessonProps {
  onComplete: () => void;
  isCompleted: boolean;
}

const tools = [
    { name: "ChatGPT", account: "Sí", free: "Sí (GPT-3.5)", ideal: "Crear textos, chatear con IA" },
    { name: "Gemini", account: "Sí (Google)", free: "Sí", ideal: "Responder con imágenes, PDFs" },
    { name: "Perplexity", account: "No", free: "Sí", ideal: "Buscar info + resumir web" },
];

export const Lesson2_2 = ({ onComplete, isCompleted }: LessonProps) => (
    <Card>
        <CardHeader>
            <div className="flex items-center justify-between">
                <div>
                    <CardTitle className="text-2xl flex items-center gap-3">
                        <MessageSquare className="h-6 w-6 text-primary" />
                        Lección 2.2 – Empezar con ChatGPT, Gemini y Perplexity
                    </CardTitle>
                    <CardDescription className="mt-2">
                        Saber usar las 3 herramientas de texto más accesibles y potentes del momento.
                    </CardDescription>
                </div>
                <Button variant={isCompleted ? "default" : "outline"} onClick={onComplete}>
                    {isCompleted ? <><CheckCircle className="mr-2 h-4 w-4" />Completada</> : "Marcar como completada"}
                </Button>
            </div>
        </CardHeader>
        <CardContent className="space-y-6">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Herramienta</TableHead>
                        <TableHead>Requiere cuenta</TableHead>
                        <TableHead>Gratuita</TableHead>
                        <TableHead>Ideal para…</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {tools.map((tool) => (
                        <TableRow key={tool.name}>
                            <TableCell className="font-medium">{tool.name}</TableCell>
                            <TableCell>{tool.account}</TableCell>
                            <TableCell>{tool.free}</TableCell>
                            <TableCell>{tool.ideal}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <div className="prose prose-sm max-w-none dark:prose-invert">
                <h3>¿Qué puedes hacer con ellas?</h3>
                <ul className="list-disc list-inside">
                    <li><strong>ChatGPT:</strong> correos, recetas, ideas, redacciones.</li>
                    <li><strong>Gemini:</strong> análisis de PDFs, imágenes, respuestas con enlaces.</li>
                    <li><strong>Perplexity:</strong> resúmenes rápidos y respuestas con fuentes reales.</li>
                </ul>
            </div>
        </CardContent>
    </Card>
);

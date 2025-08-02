import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Trophy, CheckCircle, XCircle, AlertTriangle } from "lucide-react";

const questions = [
    { id: 'q1', text: '¿Cuál de estas tareas NO puedes hacer con una versión gratuita de IA normalmente?', options: ['Escribir un email', 'Generar un vídeo en HD de 5 minutos', 'Crear una imagen para un post', 'Resumir un PDF corto'], correctAnswer: 'B' },
    { id: 'q2', text: '¿Qué herramienta es ideal para obtener respuestas con fuentes reales y sin necesidad de cuenta?', options: ['ChatGPT', 'Gemini', 'Perplexity', 'Midjourney'], correctAnswer: 'C' },
    { id: 'q3', text: 'Para crear una imagen con un texto específico (ej. un cartel), ¿qué herramienta gratuita es la más recomendada?', options: ['Leonardo AI', 'Bing Creator', 'Ideogram', 'RunwayML'], correctAnswer: 'C' },
    { id: 'q4', text: '¿Qué es un "truco" para maximizar el uso de IAs gratuitas?', options: ['Pagar una suscripción mensual', 'Usar siempre la misma herramienta para todo', 'Mezclar diferentes herramientas según su especialidad', 'Descargar un software de pago'], correctAnswer: 'C' },
    { id: 'q5', text: 'Si quieres analizar el contenido de un PDF que has subido, ¿qué herramienta usarías?', options: ['Ideogram', 'Gemini', 'ElevenLabs', 'Make'], correctAnswer: 'B' },
    { id: 'q6', text: '¿Cuál de estas herramientas NO sirve para generar vídeo?', options: ['RunwayML', 'Pika', 'Play.ht', 'Luma Labs'], correctAnswer: 'C' },
    { id: 'q7', text: 'Para crear una voz natural para un podcast o un cuento, ¿cuál es la mejor opción gratuita?', options: ['Narakeet', 'Play.ht', 'ElevenLabs', 'AskYourPDF'], correctAnswer: 'C' },
    { id: 'q8', text: '¿Qué herramienta te permite conectar diferentes aplicaciones para crear un flujo de trabajo automático?', options: ['ChatGPT', 'Make (Integromat)', 'Leonardo AI', 'Humata'], correctAnswer: 'B' },
    { id: 'q9', text: '¿Cuál de las siguientes es una limitación común en las IAs gratuitas?', options: ['No entienden español', 'Generaciones ilimitadas', 'Límites en la cantidad de uso diario o mensual', 'Solo funcionan con conexión a internet'], correctAnswer: 'C' },
    { id: 'q10', text: 'Si necesitas una imagen con un estilo muy artístico o de ilustración, ¿qué herramienta gratuita es una buena alternativa a Midjourney?', options: ['Perplexity', 'Leonardo AI', 'AskYourPDF', 'N8N'], correctAnswer: 'B' },
    { id: 'q11', text: '¿Qué herramienta usarías para resumir un documento largo y poder hacerle preguntas específicas?', options: ['Humata', 'Pika', 'Ideogram', 'Make'], correctAnswer: 'A' },
    { id: 'q12', text: '¿Qué es N8N?', options: ['Una IA para generar imágenes', 'Una herramienta de automatización, a menudo auto-hospedada', 'Un generador de voz', 'Un lector de PDF'], correctAnswer: 'B' },
    { id: 'q13', text: 'El acceso a los modelos de IA más potentes como GPT-4o o Claude 3 Opus es generalmente...', options: ['Gratuito y sin límites', 'Gratuito pero con publicidad', 'De pago', 'No disponible para el público'], correctAnswer: 'C' },
    { id: 'q14', text: '¿Qué herramienta de Microsoft integra IA para crear imágenes y es gratuita?', options: ['Microsoft Word', 'Bing Image Creator', 'Excel', 'PowerPoint'], correctAnswer: 'B' },
    { id: 'q15', text: 'Para el proyecto final del Módulo 2, ¿qué herramienta se usaría para combinar todos los elementos (texto, imagen, voz)?', options: ['ChatGPT', 'Canva', 'Make', 'Perplexity'], correctAnswer: 'B' },
];

export const Quiz2 = () => {
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [result, setResult] = useState<{ score: number; passed: boolean } | null>(null);
    const [attempts, setAttempts] = useState(0);

    const handleAnswerChange = (questionId: string, value: string) => {
        setAnswers(prev => ({ ...prev, [questionId]: value }));
    };

    const handleSubmit = () => {
        if (attempts >= 3) return;
        
        let score = 0;
        questions.forEach(q => {
            if (answers[q.id] === q.correctAnswer) {
                score++;
            }
        });
        
        setResult({ score, passed: score >= 10 });
        setAttempts(prev => prev + 1);
    };

    const handleRetry = () => {
        setAnswers({});
        setResult(null);
    }
    
    if (result) {
        return (
            <Card className={result.passed ? "border-green-500" : "border-destructive"}>
                <CardHeader className="text-center">
                    {result.passed ? (
                        <CheckCircle className="mx-auto h-12 w-12 text-green-500" />
                    ) : (
                        <XCircle className="mx-auto h-12 w-12 text-destructive" />
                    )}
                    <CardTitle className="text-2xl">{result.passed ? '¡Felicidades, has aprobado!' : '¡A repasar!'}</CardTitle>
                    <CardDescription>
                        Tu puntuación: {result.score} de {questions.length} preguntas correctas.
                    </CardDescription>
                </CardHeader>
                <CardContent className="text-center space-y-4">
                     {result.passed ? (
                         <p>¡Excelente! Ya puedes pasar al Módulo 3.</p>
                     ) : (
                         <>
                            {attempts < 3 ? (
                                <div>
                                    <p>No te preocupes. Revisa las lecciones del Módulo 2 y vuelve a intentarlo.</p>
                                    <p className="text-sm text-muted-foreground">Te quedan {3 - attempts} intentos.</p>
                                    <Button onClick={handleRetry} className="mt-4">Reintentar Examen</Button>
                                </div>
                            ) : (
                                <div className="p-4 bg-destructive/10 rounded-lg">
                                    <AlertTriangle className="mx-auto h-8 w-8 text-destructive mb-2" />
                                    <p className="font-semibold">Has agotado todos tus intentos.</p>
                                    <p className="text-sm">Por favor, repasa el contenido del Módulo 2 antes de continuar.</p>
                                </div>
                            )}
                         </>
                     )}
                </CardContent>
            </Card>
        )
    }

    return (
        <Card>
            <CardHeader>
                <CardTitle className="text-2xl flex items-center gap-3">
                    <Trophy className="h-6 w-6 text-primary" />
                    Examen Módulo 2: “Empezar sin pagar un duro”
                </CardTitle>
                <CardDescription className="mt-2">
                    Debes acertar 10 de 15 preguntas para desbloquear el siguiente módulo. Tienes {3-attempts} intentos.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
                {questions.map((q, index) => (
                    <div key={q.id}>
                        <p className="font-medium mb-4">{index + 1}. {q.text}</p>
                        <RadioGroup onValueChange={(value) => handleAnswerChange(q.id, value)}>
                            {q.options.map((option, i) => {
                                const optionId = String.fromCharCode(65 + i); // A, B, C, D
                                return (
                                    <div key={i} className="flex items-center space-x-2">
                                        <RadioGroupItem value={optionId} id={`${q.id}-${optionId}`} />
                                        <Label htmlFor={`${q.id}-${optionId}`}>{option}</Label>
                                    </div>
                                )
                            })}
                        </RadioGroup>
                    </div>
                ))}
                <Button onClick={handleSubmit} disabled={Object.keys(answers).length < questions.length || attempts >= 3} className="w-full">
                    Corregir Examen
                </Button>
            </CardContent>
        </Card>
    );
};

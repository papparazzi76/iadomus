import { useState, useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";
import { useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Brain,
  ArrowLeft,
  CheckCircle,
  Target,
  Lightbulb,
  Wrench,
  BookOpen,
  Trophy,
  Bot,
  X,
  MessageSquare,
  Sparkles,
  Lock,
  Gift,
  Image,
  Video,
  Mic,
  FileText,
  Settings,
  Rocket,
} from "lucide-react";

// Lecciones Módulo 1
import { Lesson1_1 } from "../components/lessons/Lesson1_1";
import { Lesson1_2 } from "../components/lessons/Lesson1_2";
import { Lesson1_3 } from "../components/lessons/Lesson1_3";
import { Lesson1_4 } from "../components/lessons/Lesson1_4";
import { Lesson1_5 } from "../components/lessons/Lesson1_5";
import { Lesson1_6 } from "../components/lessons/Lesson1_6";
import { Quiz1 } from "../components/lessons/Quiz1";

// Lecciones Módulo 2
import { Lesson2_1 } from "../components/lessons/Lesson2_1";
import { Lesson2_2 } from "../components/lessons/Lesson2_2";
import { Lesson2_3 } from "../components/lessons/Lesson2_3";
import { Lesson2_4 } from "../components/lessons/Lesson2_4";
import { Lesson2_5 } from "../components/lessons/Lesson2_5";
import { Lesson2_6 } from "../components/lessons/Lesson2_6";
import { Lesson2_7 } from "../components/lessons/Lesson2_7";
import { Lesson2_8 } from "../components/lessons/Lesson2_8";
import { Quiz2 } from "../components/lessons/Quiz2";

const courseModules = [
  {
    id: "1",
    title: "MÓDULO 1",
    subtitle: "Bienvenido al Universo IA",
    lessons: [
      { id: "1.1", title: "¿Qué es la IA?", icon: Target, component: Lesson1_1 },
      { id: "1.2", title: "Clasificación de herramientas", icon: Wrench, component: Lesson1_2 },
      { id: "1.3", title: "¿Qué herramienta usar?", icon: Lightbulb, component: Lesson1_3 },
      { id: "1.4", title: "¿Qué es un modelo de IA?", icon: Brain, component: Lesson1_4 },
      { id: "1.5", title: "El arte del Prompt", icon: MessageSquare, component: Lesson1_5 },
      { id: "1.6", title: "IA vs Herramienta con IA", icon: Bot, component: Lesson1_6 },
      { id: "1.7", title: "Examen Final Módulo 1", icon: Trophy, isQuiz: true, component: Quiz1 },
    ]
  },
  {
    id: "2",
    title: "MÓDULO 2",
    subtitle: "Empezar sin pagar un duro",
    lessons: [
      { id: "2.1", title: "Qué puedes hacer gratis (y qué no)", icon: Gift, component: Lesson2_1 },
      { id: "2.2", title: "ChatGPT, Gemini y Perplexity", icon: MessageSquare, component: Lesson2_2 },
      { id: "2.3", title: "Crear imágenes gratis", icon: Image, component: Lesson2_3 },
      { id: "2.4", title: "Generar vídeos IA gratis", icon: Video, component: Lesson2_4 },
      { id: "2.5", title: "Crear voces y narraciones", icon: Mic, component: Lesson2_5 },
      { id: "2.6", title: "Leer y resumir PDFs gratis", icon: FileText, component: Lesson2_6 },
      { id: "2.7", title: "Automatizar tareas gratis", icon: Settings, component: Lesson2_7 },
      { id: "2.8", title: "Tu primer proyecto IA gratis", icon: Rocket, component: Lesson2_8 },
      { id: "2.9", title: "Examen Final Módulo 2", icon: Trophy, isQuiz: true, component: Quiz2 },
    ]
  }
];

const Course = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const { moduleId } = useParams();
  
  const currentModule = courseModules.find(m => m.id === moduleId);
  const lessons = currentModule?.lessons || [];

  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [activeLesson, setActiveLesson] = useState(lessons[0]?.id || null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  useEffect(() => {
    if (!currentModule) {
      navigate("/not-found");
    }
  }, [moduleId, currentModule, navigate]);
  
  useEffect(() => {
    // En una app real, aquí se cargaría el progreso desde una DB.
    // Por ahora, se reinicia al cambiar de módulo.
    setCompletedLessons([]);
    setActiveLesson(lessons[0]?.id || null);
  }, [moduleId]);


  if (!user) {
    navigate("/auth");
    return null;
  }

  if (!currentModule) {
      return <div>Cargando módulo...</div>; // O un componente de carga
  }

  const handleCompleteLesson = (lessonId: string) => {
    setCompletedLessons((prev) => {
      if (prev.includes(lessonId)) return prev;
      const newCompleted = [...prev, lessonId];
      
      const currentIndex = lessons.findIndex(l => l.id === lessonId);
      if (currentIndex < lessons.length - 1) {
        setActiveLesson(lessons[currentIndex + 1].id);
      }
      return newCompleted;
    });
  };
  
  const progressPercentage = (completedLessons.length / (lessons.length - 1)) * 100;
  const ActiveLessonComponent = lessons.find(l => l.id === activeLesson)?.component;
  const allLessonsCompleted = completedLessons.length === lessons.filter(l => !l.isQuiz).length;

  return (
    <div className="min-h-screen bg-gradient-subtle">
      {/* Header */}
      <div className="border-b border-border/50 bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button
                variant="ghost"
                onClick={() => navigate("/")}
                className="text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Inicio
              </Button>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-gradient-primary">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h1 className="font-bold text-xl">{currentModule.title}</h1>
                  <p className="text-sm text-muted-foreground">
                    {currentModule.subtitle}
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-right">
                <div className="text-sm font-medium">
                  {Math.round(progressPercentage)}% completado
                </div>
                <Progress value={progressPercentage} className="w-32" />
              </div>
              <Trophy className="h-6 w-6 text-accent" />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Lecciones
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                {lessons.map((lesson, index) => {
                  const Icon = lesson.icon;
                  const isCompleted = completedLessons.includes(lesson.id);
                  const isActive = activeLesson === lesson.id;
                  
                  let isLocked = false;
                  if (index > 0) {
                      const prevLesson = lessons[index-1];
                      if (!completedLessons.includes(prevLesson.id)) {
                          isLocked = true;
                      }
                  }

                  if (lesson.isQuiz && !allLessonsCompleted) {
                      isLocked = true;
                  }

                  return (
                    <Button
                      key={lesson.id}
                      variant={isActive ? "default" : "ghost"}
                      className={`w-full justify-start gap-3`}
                      onClick={() => setActiveLesson(lesson.id)}
                      disabled={isLocked}
                    >
                      {isLocked ? <Lock className="h-4 w-4 text-muted-foreground" /> :
                       isCompleted && !lesson.isQuiz ? (
                        <CheckCircle className="h-4 w-4 text-primary" />
                      ) : (
                        <Icon className="h-4 w-4" />
                      )}
                      <span className="text-left flex-1">{lesson.title}</span>
                    </Button>
                  );
                })}
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3 space-y-6">
            {ActiveLessonComponent && <ActiveLessonComponent onComplete={() => handleCompleteLesson(activeLesson!)} isCompleted={completedLessons.includes(activeLesson!)} />}
            
            {allLessonsCompleted && !lessons.find(l => l.id === activeLesson)?.isQuiz && (
              <Card className="bg-gradient-primary text-white border-0 mt-8">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-3">
                    <Sparkles className="h-6 w-6" />
                    ¡Módulo completado!
                  </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-lg mb-4">¡Felicidades! Has completado todas las lecciones.</p>
                    <Button
                      className="bg-white text-primary hover:bg-white/90"
                      onClick={() => setActiveLesson(lessons.find(l => l.isQuiz)!.id)}
                    >
                      Ir al Examen Final
                    </Button>
                </CardContent>
              </Card>
            )}
          </div>
        </div>
      </div>
      
      {isChatOpen && (
        <div className="fixed bottom-4 right-4 z-50">
          <Card className="w-96">
            <CardHeader className="flex flex-row items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-primary rounded-full"></div>
                <div>
                  <CardTitle>Domito</CardTitle>
                  <CardDescription>Tu asistente de IA</CardDescription>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsChatOpen(false)}
              >
                <X />
              </Button>
            </CardHeader>
            <CardContent>
              <div className="h-64 overflow-y-auto p-4 border rounded-md mb-4">
                <p className="text-muted-foreground">
                  Hola! Soy Domito. ¿En qué puedo ayudarte con esta lección?
                </p>
              </div>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Escribe tu pregunta..."
                  className="flex-1 p-2 border rounded-md bg-background text-foreground"
                />
                <Button>Enviar</Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};

export default Course;

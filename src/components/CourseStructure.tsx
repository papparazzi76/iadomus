import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { CheckCircle, Clock, Trophy, Zap, Brain, Target, Rocket, Users, Lock } from "lucide-react"; // Import Lock icon
import { Link } from "react-router-dom";

const modules = [
  {
    id: 1,
    title: "Introducción sin tecnicismos",
    description: "Entiende qué es la IA de verdad y cómo puede cambiar tu vida",
    icon: Brain,
    duration: "45 min",
    lessons: 6,
    difficulty: "Principiante",
    status: "completed", // Changed to completed for demonstration
    color: "from-ai-purple to-primary"
  },
  {
    id: 2,
    title: "Herramientas según función",
    description: "Descubre las mejores herramientas para cada tipo de tarea",
    icon: Zap,
    duration: "1h 20min",
    lessons: 8,
    difficulty: "Principiante",
    status: "available",
    color: "from-accent to-ai-blue"
  },
  {
    id: 3,
    title: "Primeros usos prácticos",
    description: "Casos reales para estudios, trabajo y creatividad",
    icon: Target,
    duration: "2h 15min",
    lessons: 12,
    difficulty: "Intermedio",
    status: "locked",
    color: "from-ai-cyan to-accent"
  },
  {
    id: 4,
    title: "Automatización inteligente",
    description: "Make, Zapier y Google Opal para automatizar todo",
    icon: Rocket,
    duration: "1h 45min",
    lessons: 10,
    difficulty: "Intermedio",
    status: "locked",
    color: "from-ai-warning to-primary"
  },
  {
    id: 5,
    title: "IA Avanzada y Prompts",
    description: "Domina el arte de los prompts y flujos complejos",
    icon: Trophy,
    duration: "2h 30min",
    lessons: 15,
    difficulty: "Avanzado",
    status: "locked",
    color: "from-primary to-ai-purple"
  },
  {
    id: 6,
    title: "Proyecto Final",
    description: "Crea tu propio sistema IA personalizado",
    icon: Users,
    duration: "3h",
    lessons: 8,
    difficulty: "Avanzado",
    status: "locked",
    color: "from-ai-success to-accent"
  }
];

const CourseStructure = () => {
  const completedModules = modules.filter(m => m.status === 'completed').length;
  const progressPercentage = (completedModules / modules.length) * 100;
  
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Header */}
      <div className="text-center mb-16">
        <Badge className="mb-4 bg-gradient-accent text-accent-foreground">
          Estructura del curso
        </Badge>
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          De <span className="gradient-text">novato</span> a experto en{" "}
          <span className="gradient-text">6 pasos</span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Metodología progresiva diseñada para que domines la IA sin frustrarte.
          Cada módulo desbloquea nuevas habilidades.
        </p>
      </div>

      {/* Progress Overview */}
      <div className="mb-12 glass-card max-w-md mx-auto">
        <div className="text-center">
          <div className="mb-4">
            <div className="text-2xl font-bold text-primary">Progreso Global</div>
            <div className="text-sm text-muted-foreground">Completa todos los módulos</div>
          </div>
          <Progress value={progressPercentage} className="mb-4" />
          <div className="text-sm text-muted-foreground">
            {completedModules} de {modules.length} módulos completados
          </div>
        </div>
      </div>

      {/* Course Modules */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {modules.map((module, index) => {
          const Icon = module.icon;
          const isLocked = module.status === "locked";
          const isCompleted = module.status === "completed";
          
          const CardContent = () => (
            <Card
              className={`relative p-6 border-border/50 transition-all duration-300 group h-full
                ${isLocked ? 'opacity-60 cursor-not-allowed' : 'hover:border-primary/50 hover:scale-[1.02] cursor-pointer'}
                ${isCompleted ? 'bg-gradient-to-br from-ai-success/10 to-ai-success/5' : ''}
              `}
            >
              {isLocked && (
                <div className="absolute inset-0 bg-card/80 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <Lock className="w-6 h-6 mx-auto mb-2 text-muted-foreground"/>
                    <div className="text-sm font-medium text-muted-foreground">
                      Completa el módulo anterior
                    </div>
                  </div>
                </div>
              )}
              
              <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-accent flex items-center justify-center text-accent-foreground font-bold text-sm">
                {module.id}
              </div>
              
              <div className="absolute top-4 right-4">
                {isCompleted && <CheckCircle className="w-6 h-6 text-ai-success" />}
              </div>
              
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${module.color} p-4 mb-6 group-hover:scale-110 transition-transform`}>
                <Icon className="w-full h-full text-white" />
              </div>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {module.description}
                  </p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <Badge variant="secondary" className="bg-muted/50">
                      {module.difficulty}
                    </Badge>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="w-3 h-3" />
                      {module.duration}
                    </div>
                  </div>
                  
                  <div className="text-xs text-muted-foreground">
                    {module.lessons} lecciones interactivas
                  </div>
                  
                  {!isLocked && (
                    <div className="pt-2">
                      <Progress 
                        value={module.status === "completed" ? 100 : (module.status === "available" ? 0 : 0)} 
                        className="h-2" 
                      />
                    </div>
                  )}
                </div>
              </div>
            </Card>
          );
          
          return isLocked ? (
            <div key={module.id}><CardContent /></div>
          ) : (
            <Link to={`/course/${module.id}`} key={module.id}><CardContent /></Link>
          );
        })}
      </div>
      
      {/* Call to Action */}
      <div className="text-center mt-16">
        <div className="glass-card max-w-lg mx-auto">
          <h3 className="text-2xl font-bold mb-4">
            ¿Listo para el <span className="gradient-text">desafío</span>?
          </h3>
          <p className="text-muted-foreground mb-6">
            Únete a miles de estudiantes que ya están transformando su futuro con IA
          </p>
          <div className="btn-hero inline-flex items-center justify-center px-6 py-3 cursor-pointer">
            Comenzar ahora gratis
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseStructure;

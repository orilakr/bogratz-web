import React from "react";
import { Card, CardContent } from "../components//card";
import { Badge } from "../components/badge";
import { Star, Users, BookOpen, Heart } from "lucide-react";

const staffMembers = [
    {
        name: "הרב יצחק כהן",
        role: "ראש הישיבה",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        description: "מוביל את הישיבה עם חכמה ודעת תורה עמוקה"
    },
    {
        name: "הרב משה לוי",
        role: "מגיד שיעור בכיר",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        description: "מלמד גמרא ופוסקים ברמה גבוהה"
    },
    {
        name: "הרב אברהם דוד",
        role: "מחנך ומדריך",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
        description: "מדריך רוחני ומלווה אישי של התלמידים"
    },
    {
        name: "הרב שמואל גולד",
        role: "מגיד שיעור",
        image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face",
        description: "מתמחה בהלכה ומשפט עברי"
    }
];

export default function Home() {
    return (
        <div className="max-w-screen lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            {/* Hero Section */}
            <div className="text-center mb-16">
                <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-sm border border-gray-200 mb-8">
                    <Star className="w-5 h-5 text-yeshiva-accent" />
                    <span className="text-yeshiva-primary font-medium">מוסד תורני מוביל</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold text-yeshiva-primary mb-6 leading-tight">
                    ברוכים הבאים
                    <br />
                    <span className="text-yeshiva-accent">לישיבתנו הקדושה</span>
                </h1>

                <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed mb-12">
                    מקום בו התורה והיראה נפגשים עם חכמת החיים. אנו מחנכים דור של תלמידי חכמים
                    ובעלי מידות טובות, הנושאים את אור התורה בכל מקום שהם הולכים
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                    <div className="text-center">
                        <div className="w-16 h-16 bg-yeshiva-primary rounded-full flex items-center justify-center mx-auto mb-4">
                            <Users className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-yeshiva-primary mb-2">קהילה חמה</h3>
                        <p className="text-gray-600">אווירה משפחתית ותומכת לכל תלמיד</p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-yeshiva-accent rounded-full flex items-center justify-center mx-auto mb-4">
                            <BookOpen className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-yeshiva-primary mb-2">לימוד מעמיק</h3>
                        <p className="text-gray-600">שיטות לימוד מתקדמות ומותאמות אישית</p>
                    </div>

                    <div className="text-center">
                        <div className="w-16 h-16 bg-yeshiva-primary rounded-full flex items-center justify-center mx-auto mb-4">
                            <Heart className="w-8 h-8 text-white" />
                        </div>
                        <h3 className="text-xl font-semibold text-yeshiva-primary mb-2">חינוך לחיים</h3>
                        <p className="text-gray-600">פיתוח אישיות וערכים יהודיים אותנטיים</p>
                    </div>
                </div>
            </div>

            {/* Staff Section */}
            <section className="mb-16">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-yeshiva-primary mb-4">
                        צוות ההוראה המובחר
                    </h2>
                    <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                        רבנים ומחנכים מנוסים המוקירים כל תלמיד ומלווים אותו בדרכו הרוחנית
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {staffMembers.map((member, index) => (
                        <Card key={index} className="bg-white/80 backdrop-blur-sm border-gray-200 hover:shadow-xl transition-all duration-300 overflow-hidden">
                            <CardContent className="p-6 text-center">
                                <div className="relative mb-6">
                                    <img
                                        src={member.image}
                                        alt={member.name}
                                        className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-yeshiva-accent shadow-lg"
                                    />
                                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                                        <Badge className="bg-yeshiva-primary text-white px-3 py-1">
                                            {member.role}
                                        </Badge>
                                    </div>
                                </div>

                                <h3 className="text-xl font-bold text-yeshiva-primary mb-3">
                                    {member.name}
                                </h3>

                                <p className="text-gray-600 text-sm leading-relaxed">
                                    {member.description}
                                </p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            {/* About Section */}
            <section className="bg-white/60 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-gray-200">
                <div className="max-w-4xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-yeshiva-primary mb-8">
                        על הישיבה שלנו
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-right">
                        <div>
                            <h3 className="text-xl font-semibold text-yeshiva-accent mb-4">החזון שלנו</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                לגדל דור של תלמידי חכמים יראי שמים, המשלבים בין עמקות בלימוד התורה
                                לבין מעורבות חברתית ותרומה למען הכלל. אנו שואפים ליצור מנהיגים רוחניים
                                שיוכלו להוביל את העם היהודי בדרך התורה והמצווה.
                            </p>
                        </div>

                        <div>
                            <h3 className="text-xl font-semibold text-yeshiva-accent mb-4">השיטה שלנו</h3>
                            <p className="text-gray-700 leading-relaxed mb-6">
                                אנו מאמינים בלימוד מעמיק ויסודי, המותאם לרמתו ולצרכיו של כל תלמיד.
                                השילוב בין לימוד בחברותא, שיעורים פרונטליים והדרכה אישית יוצר חוויית
                                לימוד מקיפה ומעשירה שמכינה את התלמידים לחיים של שירות ה'.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 p-6 bg-yeshiva-primary/5 rounded-2xl border border-yeshiva-primary/20">
                        <p className="text-yeshiva-primary text-lg font-medium italic">
                            "ותלמוד תורה כנגד כולם" - התורה היא הבסיס לכל חיינו, ומכאן אנו שואבים
                            את הכוח והההשראה להמשיך ולגדול יום יום
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
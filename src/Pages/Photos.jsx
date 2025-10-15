
import React, { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/card";
import { Button } from "../components/button";
import { Instagram, ExternalLink, Heart, MessageCircle, Users } from "lucide-react";

export default function Photos() {
    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://cdn.lightwidget.com/widgets/lightwidget.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div className="max-w-screen lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-yeshiva-primary mb-6">
                    תמונות מהישיבה
                </h1>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                    הצצה לחיי הישיבה היומיומיים, לימודים, אירועים ורגעים מיוחדים
                </p>
            </div>

            {/* WhatsApp Community Card */}
            <Card className="bg-gradient-to-r from-green-50 to-emerald-50 border-green-200 mb-8 shadow-lg">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-green-700">
                        <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                            <MessageCircle className="w-6 h-6 text-white" />
                        </div>
                        הצטרפו לקהילת WhatsApp שלנו
                    </CardTitle>
                </CardHeader>
                <CardContent className="m-4">
                    <div className="text-center">
                        <p className="text-gray-700 mb-6">
                            הישארו מחוברים! הצטרפו לקהילת WhatsApp של הישיבה לעדכונים שוטפים,
                            תמונות, סרטונים ותכנים בלעדיים
                        </p>
                        <a
                            href="https://chat.whatsapp.com/Kb7i33hxZEV13o0Hr9bY43?mode=ems_copy_c"
                            target="_blank"
                            className="bg-green-500 hover:bg-green-600 text-white flex-wrap px-8 py-4 justify-center rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-3 mx-auto shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            הצטרפו לקהילה
                            <Users className="w-6 h-6" />
                        </a>
                    </div>
                </CardContent>
            </Card>

            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-dashed border-2 border-purple-200">
                <CardContent className="p-4 sm:p-6">
                    <div className="text-center space-y-4">
                        <div className="w-16 h-16 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                            <Instagram className="w-8 h-8 text-white" />
                        </div>

                        <div className="w-full max-w-5xl mx-auto">
                            <div className="relative w-full" style={{ paddingTop: '100%', minHeight: '600px' }}>
                                <iframe
                                    src="https://cdn.lightwidget.com/widgets/68ecd1fa6cdf5808a8e9853dd4e93885.html"
                                    allowtransparency="true"
                                    className="absolute top-0 left-0 w-full h-full border-0 rounded-lg"
                                    scrolling="no"
                                    frameBorder="0"
                                ></iframe>
                            </div>
                        </div>

                        <div className="flex justify-center gap-4 pt-2">
                            <div className="flex items-center gap-2 text-gray-500 text-sm">
                                <Heart className="w-4 h-4 text-red-400" />
                                <span>עוקבים אחרינו</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-500 text-sm">
                                <MessageCircle className="w-4 h-4 text-blue-400" />
                                <span>תגובות ושיתופים</span>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Follow Us Section */}
            <div className="text-center mt-16">
                <Card className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-200/50 p-8">
                    <CardContent>
                        <h3 className="text-2xl font-bold text-yeshiva-primary mb-4">
                            עקבו אחרינו ברשתות החברתיות
                        </h3>
                        <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
                            הצטרפו אלינו באינסטגרם לעדכונים יומיומיים, תמונות מאירועים ותכנים מיוחדים
                        </p>
                        <div className="flex justify-center gap-4">
                            <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2">
                                <Instagram className="w-5 h-5" />
                                עקבו אחרינו
                            </button>
                            <button className="border border-yeshiva-primary text-yeshiva-primary hover:bg-yeshiva-primary hover:text-white px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2">
                                <ExternalLink className="w-5 h-5" />
                                בקרו בפרופיל
                            </button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

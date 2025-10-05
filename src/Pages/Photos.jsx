
import React, { useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/card";
import { Button } from "../components/button";
import { Instagram, ExternalLink, Heart, MessageCircle } from "lucide-react";

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
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
                        </div>
                        הצטרפו לקהילת הWhatsApp שלנו
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
                            className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 justify-center rounded-full font-bold text-lg transition-all duration-300 flex items-center gap-3 mx-auto shadow-lg hover:shadow-xl hover:scale-105"
                        >
                            הצטרפו לקהילה
                        </a>
                    </div>
                </CardContent>
            </Card>

            {/* Placeholder for Instagram iframe */}
            <Card className="bg-gradient-to-br from-purple-50 to-pink-50 border-dashed border-2 border-purple-200">
                <CardContent className="p-12">
                    <div className="text-center space-y-6">
                        <div className="w-24 h-24 mx-auto bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                            <Instagram className="w-12 h-12 text-white" />
                        </div>

                        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 mx-auto overflow-x-auto">
                            {/* <!-- LightWidget WIDGET --> */}
                            <div>
                                <iframe src="https://cdn.lightwidget.com/widgets/68ecd1fa6cdf5808a8e9853dd4e93885.html" allowtransparency="true" className="lightwidget-widget custom-iframe"></iframe>
                            </div>
                        </div>
                        <div className="flex justify-center gap-4 pt-4">
                            <div className="flex items-center gap-2 text-gray-500">
                                <Heart className="w-5 h-5 text-red-400" />
                                <span>עוקבים אחרינו</span>
                            </div>
                            <div className="flex items-center gap-2 text-gray-500">
                                <MessageCircle className="w-5 h-5 text-blue-400" />
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

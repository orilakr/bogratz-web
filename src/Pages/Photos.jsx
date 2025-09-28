
import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Instagram, ExternalLink, Heart, MessageCircle } from "lucide-react";

export default function Photos() {
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

            {/* Instagram Integration Notice */}
            <Card className="bg-white/80 backdrop-blur-sm border-gray-200 mb-8">
                <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-yeshiva-primary">
                        <Instagram className="w-6 h-6" />
                        האינסטגרם שלנו
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="text-center text-gray-600 mb-6">
                        <p>
                            בעמוד זה יוטמע בהמשך פיד האינסטגרם של הישיבה להצגת התמונות האחרונות.
                        </p>
                        <p className="text-sm mt-2">בינתיים, אתם מוזמנים לעקוב אחרינו ישירות באפליקציה.</p>
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

                        <div>
                            <h3 className="text-2xl font-bold text-yeshiva-primary mb-2">
                                אזור פיד האינסטגרם
                            </h3>
                            <p className="text-gray-600 max-w-md mx-auto">
                                כאן יוטמע iframe עם פיד האינסטגרם של הישיבה.
                            </p>
                        </div>

                        <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 max-w-lg mx-auto overflow-x-auto">
                            <code className="text-sm text-gray-700 block whitespace-pre">
                                {`<!-- You will insert your Instagram iframe here -->
<iframe 
  src="your-instagram-embed-url"
  width="100%" 
  height="600" 
  style="border:none;overflow:hidden" 
  scrolling="no" 
  frameborder="0" 
  allowfullscreen="true" 
  allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share">
</iframe>`}
                            </code>
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

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { MapPin, Car, Bus, Train, Clock, Phone, ExternalLink, Navigation } from "lucide-react";

export default function DirectionsSection() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-yeshiva-primary mb-6">הגעה לישיבה</h1>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                    כל המידע הדרוש להגעה נוחה ובטוחה לישיבתנו הקדושה
                </p>
            </div>

            {/* Address & Quick Actions */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                <Card className="lg:col-span-2 bg-white/80 backdrop-blur-sm border-gray-200">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-yeshiva-primary">
                            <MapPin className="w-6 h-6" />
                            כתובת הישיבה
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="text-right space-y-4">
                            <div>
                                <h3 className="font-semibold text-yeshiva-primary text-lg mb-2">ישיבתנו הקדושה</h3>
                                <p className="text-gray-700">רחוב הרב קוק 15</p>
                                <p className="text-gray-700">ירושלים, 12345</p>
                            </div>
                            <div className="flex items-center gap-2 text-yeshiva-accent">
                                <Phone className="w-4 h-4" />
                                <span className="font-medium">02-123-4567</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-6">
                            <Button onClick={() => window.open("https://www.google.com/maps", "_blank")} className="bg-yeshiva-primary hover:bg-yeshiva-primary/90 text-white">
                                <ExternalLink className="w-4 h-4 mr-2" />
                                Google Maps
                            </Button>
                            <Button onClick={() => window.open("https://www.waze.com", "_blank")} className="bg-yeshiva-accent hover:bg-yeshiva-accent/90 text-white">
                                <Navigation className="w-4 h-4 mr-2" />
                                Waze
                            </Button>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-yeshiva-primary/5 backdrop-blur-sm border-yeshiva-primary/20">
                    <CardHeader>
                        <CardTitle className="text-yeshiva-primary">שעות פתיחה</CardTitle>
                    </CardHeader>
                    <CardContent className="text-right space-y-3">
                        <div className="flex justify-between">
                            <Badge className="bg-yeshiva-primary text-white">06:00 - 23:00</Badge>
                            <span>ראשון - חמישי</span>
                        </div>
                        <div className="flex justify-between">
                            <Badge className="bg-yeshiva-accent text-white">07:00 - 14:00</Badge>
                            <span>יום שישי</span>
                        </div>
                        <div className="flex justify-between">
                            <Badge variant="outline" className="border-gray-400">סגור</Badge>
                            <span>שבת</span>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Transportation */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <Card className="bg-white/80 backdrop-blur-sm border-gray-200 hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-yeshiva-primary">
                            <Car className="w-6 h-6" />
                            ברכב פרטי
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-right">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-gray-600">
                                <Clock className="w-4 h-4" />
                                <span>20-30 דקות ממרכז העיר</span>
                            </div>
                            <div className="bg-yeshiva-accent/10 p-3 rounded-lg">
                                <p className="text-sm font-medium text-yeshiva-primary">🅿️ חניה זמינה במתחם</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border-gray-200 hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-yeshiva-primary">
                            <Bus className="w-6 h-6" />
                            בתחבורה ציבורית
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-right">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-gray-600">
                                <Clock className="w-4 h-4" />
                                <span>25-40 דקות</span>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-center justify-between">
                                    <Badge className="bg-blue-100 text-blue-800">קו 12</Badge>
                                    <span className="text-sm">תחנת הר הצופים</span>
                                </div>
                                <div className="flex items-center justify-between">
                                    <Badge className="bg-green-100 text-green-800">קו 25</Badge>
                                    <span className="text-sm">תחנת בית ישראל</span>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card className="bg-white/80 backdrop-blur-sm border-gray-200 hover:shadow-xl transition-all duration-300">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-3 text-yeshiva-primary">
                            <Train className="w-6 h-6" />
                            ברכבת
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="text-right">
                        <div className="space-y-4">
                            <div className="flex items-center gap-2 text-gray-600">
                                <Clock className="w-4 h-4" />
                                <span>45-60 דקות ממרכז</span>
                            </div>
                            <p className="text-sm">תחנת ירושלים - יצחק נבון</p>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
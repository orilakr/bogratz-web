import React, { useState, useEffect } from "react";
import { Card, CardContent } from "../components/card";
import { Badge } from "../components/badge";
import { Button } from "../components/button";
import { Play, Clock, Eye, ExternalLink, Loader, AlertTriangle } from "lucide-react";
import { Skeleton } from "../components/skeleton";

const API_KEY = "AIzaSyDCYmvjTRKuppXkVZEK6wfUoeK72_fJvFQ";
const CHANNEL_ID = "UCioZXW3oASlPs3WsWPtRgMA";
const UPLOADS_PLAYLIST_ID = "UUioZXW3oASlPs3WsWPtRgMA"; // Channel ID with UC -> UU

// todo: can we make sure we load the content of the video pane only once instead of each time someone switched to the videos tab to avoid running out of api quota?

export default function Videos() {
    const [videos, setVideos] = useState([]);
    const [playlists, setPlaylists] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [activePlaylist, setActivePlaylist] = useState({ id: UPLOADS_PLAYLIST_ID, title: "הכל" });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchApi = async (url) => {
        const response = await fetch(url);
        if (!response.ok) {
            const errorData = await response.json();
            const errorMessage = errorData?.error?.message || "An unexpected API error occurred.";
            throw new Error(`שגיאת API: ${errorMessage}`);
        }
        return response.json();
    };

    useEffect(() => {
        const fetchPlaylists = async () => {
            try {
                const playlistsUrl = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId=${CHANNEL_ID}&maxResults=10&key=${API_KEY}`;
                const data = await fetchApi(playlistsUrl);
                setPlaylists(data.items || []);
            } catch (err) {
                // Don't set a page-level error for playlists, just log it.
                console.error("Failed to fetch playlists:", err);
            }
        };
        fetchPlaylists();
    }, []);

    useEffect(() => {
        const fetchVideos = async () => {
            setLoading(true);
            setError(null);
            setSelectedVideo(null);
            setVideos([]);

            try {
                const videosUrl = `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet,contentDetails&playlistId=${activePlaylist.id}&maxResults=10&key=${API_KEY}`;
                const data = await fetchApi(videosUrl);

                const validVideos = data.items.filter(v => v.snippet?.thumbnails?.medium);
                setVideos(validVideos);
                if (validVideos.length > 0) {
                    setSelectedVideo(validVideos[0]);
                }

            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };
        fetchVideos();
    }, [activePlaylist]);

    const VideoSkeleton = () => (
        <div className="space-y-4">
            <Skeleton className="w-full aspect-video" />
            <Skeleton className="h-8 w-3/4" />
            <Skeleton className="h-4 w-1/2" />
            <Skeleton className="h-4 w-full" />
        </div>
    );

    return (
        <div className="max-w-screen lg:max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
            <div className="text-center mb-12">
                <h1 className="text-4xl md:text-5xl font-bold text-yeshiva-primary mb-6">
                    שיעורים ושיחות
                </h1>
                <p className="text-xl text-gray-700 max-w-3xl mx-auto">
                    צפו בשיעורים ובשיחות המרתקות של רבני הישיבה, ישירות מערוץ היוטיוב שלנו
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-12">
                <Button
                    onClick={() => setActivePlaylist({ id: UPLOADS_PLAYLIST_ID, title: "הכל" })}
                    variant={activePlaylist.title === "הכל" ? "default" : "outline"}
                    className={`rounded-full transition-all duration-300 ${activePlaylist.title === "הכל"
                        ? 'bg-yeshiva-primary hover:bg-yeshiva-primary text-white'
                        : 'border-yeshiva-primary text-yeshiva-primary hover:bg-yeshiva-primary hover:text-white'
                        }`}
                >
                    הכל
                </Button>
                {playlists.map((playlist) => (
                    <Button
                        key={playlist.id}
                        onClick={() => setActivePlaylist({ id: playlist.id, title: playlist.snippet.title })}
                        variant={activePlaylist.id === playlist.id ? "default" : "outline"}
                        className={`rounded-full transition-all duration-300 ${activePlaylist.id === playlist.id
                            ? 'bg-yeshiva-primary hover:bg-yeshiva-primary text-white'
                            : 'border-yeshiva-primary text-yeshiva-primary hover:bg-yeshiva-primary hover:text-white'
                            }`}
                    >
                        {playlist.snippet.title}
                    </Button>
                ))}
            </div>

            {loading && <VideoSkeleton />}

            {error && (
                <Card className="bg-red-50 border-red-200 text-red-800">
                    <CardContent className="p-6 flex items-center gap-4">
                        <AlertTriangle className="w-8 h-8" />
                        <div>
                            <h3 className="font-bold">אירעה שגיאה</h3>
                            <p>{error}</p>
                        </div>
                    </CardContent>
                </Card>
            )}

            {!loading && !error && videos.length === 0 && (
                <Card className="bg-yellow-50 border-yellow-200 text-yellow-800">
                    <CardContent className="p-6 text-center">
                        <h3 className="font-bold">לא נמצאו סרטונים</h3>
                        <p>לא נמצאו סרטונים בפלייליסט "{activePlaylist.title}".</p>
                    </CardContent>
                </Card>
            )}

            {!loading && !error && selectedVideo && (
                <div className="mb-16">
                    <h2 className="text-2xl font-bold text-yeshiva-primary mb-6">
                        {activePlaylist.title === "הכל" ? "הסרטון האחרון" : `מתוך: ${activePlaylist.title}`}
                    </h2>
                    <Card className="overflow-hidden bg-white/80 backdrop-blur-sm border-gray-200 hover:shadow-xl transition-all duration-300">
                        <div className="md:flex">
                            <div className="md:w-1/2">
                                <div className="relative bg-gray-900 aspect-video">
                                    <iframe
                                        src={`https://www.youtube.com/embed/${selectedVideo.contentDetails.videoId}`}
                                        title={selectedVideo.snippet.title}
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        className="w-full h-full"
                                    ></iframe>
                                </div>
                            </div>
                            <div className="md:w-1/2 p-8">
                                <span className="text-gray-500 text-sm">{new Date(selectedVideo.snippet.publishedAt).toLocaleDateString('he-IL')}</span>
                                <h3 className="text-2xl font-bold text-yeshiva-primary my-4">
                                    {selectedVideo.snippet.title}
                                </h3>
                                <p className="text-gray-700 mb-6 leading-relaxed line-clamp-4">
                                    {selectedVideo.snippet.description}
                                </p>
                                <a href={`https://www.youtube.com/watch?v=${selectedVideo.contentDetails.videoId}`} target="_blank" rel="noopener noreferrer">
                                    <Button className="bg-yeshiva-accent hover:bg-yeshiva-accent/90 text-white w-full">
                                        <ExternalLink className="w-4 h-4 ml-2" />
                                        צפה ביוטיוב
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </Card>
                </div>
            )}

            {!loading && videos.length > 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {videos.map((video) => (
                        <Card
                            key={video.id}
                            className="overflow-hidden bg-white/80 backdrop-blur-sm border-gray-200 hover:shadow-xl transition-all duration-300 group cursor-pointer"
                            onClick={() => setSelectedVideo(video)}
                        >
                            <div className="relative bg-gray-900 aspect-video">
                                <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <Play className="w-16 h-16 text-white opacity-90" />
                                </div>
                            </div>

                            <CardContent className="p-6">
                                <span className="text-gray-500 text-xs">{new Date(video.snippet.publishedAt).toLocaleDateString('he-IL')}</span>
                                <h3 className="text-lg font-bold text-yeshiva-primary my-3 line-clamp-2">
                                    {video.snippet.title}
                                </h3>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            )}
        </div>
    );
}
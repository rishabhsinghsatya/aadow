import React, { useState, useEffect } from "react";
import {
  ArrowUpDown,
  Copy,
  ThumbsUp,
  ThumbsDown,
  CalendarRange,
  ChevronDown,
  Sparkles,
  X,
  Star,
  FileText,
} from "lucide-react";
import OpenAI from "openai";

const ContentGenerator = () => {
  const openai = new OpenAI({
    apiKey: OPEN_AI_API_KEY, // new api key
    dangerouslyAllowBrowser: true,
  });

  const [topic, setTopic] = useState("");
  const [keywords, setKeywords] = useState("");
  const [tone, setTone] = useState("");
  const [language, setLanguage] = useState("English");
  const [formality, setFormality] = useState("Neutral");

  const [outputs, setOutputs] = useState([]);
  const [activeTab, setActiveTab] = useState("new");
  const [favorites, setFavorites] = useState([]);
  const [copiedOutputs, setCopiedOutputs] = useState([]);

  const [likedOutputs, setLikedOutputs] = useState([]);
  const [dislikedOutputs, setDislikedOutputs] = useState([]);
  const [timeAgo, setTimeAgo] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const message = {
    // text: "This is an example message.",
    timestamp: null,
  };

  useEffect(() => {
    const calculateTimeAgo = () => {
      const now = new Date();
      const messageTime = new Date(message.timestamp);
      const timeDiff = Math.floor((now - messageTime) / 1000);

      if (timeDiff < 60) {
        return `${timeDiff}s ago`; // seconds ago
      } else if (timeDiff < 3600) {
        return `${Math.floor(timeDiff / 60)}m ago`; // minutes ago
      } else if (timeDiff < 86400) {
        return `${Math.floor(timeDiff / 3600)}h ago`; // hours ago
      } else {
        return `${Math.floor(timeDiff / 86400)}d ago`; // days ago
      }
    };

    // Set the initial time ago
    setTimeAgo(calculateTimeAgo());

    // Update the time every minute
    const interval = setInterval(() => {
      setTimeAgo(calculateTimeAgo());
    }, 60000); // Update every minute

    return () => clearInterval(interval);
  }, [message.timestamp]);

  const handleGenerate = async () => {
    if (!topic.trim()) {
      setError("Please enter a content text.");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const response = await openai.chat.completions.create({
        model: "gpt-4",
        messages: [
          {
            role: "user",
            content: `Generate content based on the following details:
            - Topic: ${topic}
            - Keywords: ${keywords || "N/A"}
            - Tone: ${tone || "N/A"}
            - Formality: ${formality || "N/A"}
            - Language: ${language || "N/A"}`,
          },
        ],
        max_tokens: 300,
      });

      const data = response?.choices?.[0]?.message?.content?.trim();

      if (data) {
        const newOutput = `
          Topic: ${topic}
          Keywords: ${keywords || "N/A"}
          Generated Content: ${data}
        `;

        setOutputs((prevOutputs) => [...prevOutputs, newOutput]);
      } else {
        throw new Error("No content generated, please try again.");
      }

      setLoading(false);
      console.log("Generated Output:", outputs);
    } catch (error) {
      console.error("Error generating content:", error);
      setError("Failed to generate content. Please try again later.");
      setLoading(false);
    }
  };

  const handleClearAll = () => {
    setTopic("");
    setKeywords("");
    setTone("");
    setLanguage("English");
    setFormality("Neutral");
  };

  const handleClearHistory = () => {
    setOutputs([]);
  };

  // Function to check if any input field has a value
  const hasAnyInputValue = () => {
    return (
      topic ||
      keywords ||
      tone ||
      language !== "English" ||
      formality !== "Neutral"
    );
  };

  const handleOpenInDocument = (output) => {
    const blob = new Blob([output], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    window.open(url);
  };

  const handleCopy = (output) => {
    navigator.clipboard.writeText(output);
    setCopiedOutputs((prevCopied) => [...prevCopied, output]);
    alert("Copied to clipboard!");
  };

  const handleFavorite = (output) => {
    setFavorites((prevFavorites) => {
      if (prevFavorites.includes(output)) {
        return prevFavorites.filter((fav) => fav !== output);
      }
      return [...prevFavorites, output];
    });
  };

  const handleLike = (output) => {
    setLikedOutputs((prevLiked) => {
      if (prevLiked.includes(output)) {
        return prevLiked.filter((liked) => liked !== output);
      }
      setDislikedOutputs((prevDisliked) =>
        prevDisliked.filter((disliked) => disliked !== output)
      );
      return [...prevLiked, output];
    });
  };

  const handleDislike = (output) => {
    setDislikedOutputs((prevDisliked) => {
      if (prevDisliked.includes(output)) {
        return prevDisliked.filter((disliked) => disliked !== output);
      }
      setLikedOutputs((prevLiked) =>
        prevLiked.filter((liked) => liked !== output)
      );
      return [...prevDisliked, output];
    });
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="w-1/4 h-screen border border-r-gray-300 flex justify-center item-center">
        Navigation{" "}
      </div>
      {/* Left side - Input form */}
      <div className="w-1/2 overflow-y-auto">
        <div className="flex justify-start gap-4 items-center mb-2 bg-white h-12 shadow">
          <CalendarRange />
          <div className="flex flex-col">
            <p className="text-base font-bold">Paragraph Generator</p>
            <p className="text-xs text-gray-500 mt-0">
              Generate paragraphs that will capivate your readers
            </p>
          </div>
        </div>
        <div className="flex space-x-2 mb-1 mx-6">
          <button className="px-3 text-sm underline text-purple-500 rounded">
            Free form
          </button>
          <button className="px-3 text-sm underline text-purple-500 rounded">
            Templates
          </button>
        </div>
        <div className="max-w-2xl bg-white rounded-xl shadow p-4 mx-6">
          <div className="space-y-2">
            <div>
              <label
                htmlFor="topic"
                className="block text-sm font-medium text-gray-700 "
              >
                What's your paragraph about?
              </label>
              <textarea
                id="topic"
                rows={4}
                className="mt-1 block w-full border p-1 rounded-lg focus:border-purple-500 focus:ring-purple-500 focus:outline-none outline-none text-sm"
                placeholder="Company specializing in creativity description: We're looking for a creative ui designer for a dedicated project user agent"
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="keywords"
                className="block text-sm font-medium text-gray-700"
              >
                Keywords to include
              </label>
              <input
                type="text"
                id="keywords"
                className="mt-1 block w-full border p-1 text-sm rounded-lg focus:border-purple-500 focus:ring-purple-500 focus:outline-none"
                placeholder="vegetarian, healthy"
                value={keywords}
                onChange={(e) => setKeywords(e.target.value)}
              />
            </div>

            <div>
              <label
                htmlFor="tone"
                className="block text-sm font-medium text-gray-700"
              >
                Tone of voice
              </label>
              <input
                type="text"
                id="tone"
                className="mt-1 block w-full text-sm border p-1 rounded-lg focus:border-purple-500 focus:ring-purple-500 focus:outline-none"
                placeholder="Informative"
                value={tone}
                onChange={(e) => setTone(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="flex flex-col space-x-2 bg-white rounded-xl shadow p-4 mx-6 mt-6">
          <h2 className="text-sm font-medium text-gray-700 mb-2 flex items-center">
            Language options
            <span className="ml-2 px-2 py-1 bg-red-100 text-red-600 text-sm font-semibold rounded-full">
              Beta
            </span>
          </h2>
          <p className="text-xs text-gray-500 mb-2">
            Deepl integration is currently disabled. Enable in Settings
          </p>
          <div className="flex gap-4">
            <div className="w-1/2">
              <label
                htmlFor="input-language"
                className="block text-sm font-medium text-gray-700"
              >
                Input language
              </label>
              <div className="mt-1 relative">
                <select
                  id="input-language"
                  className="block appearance-none w-full bg-white border p-1 rounded-lg focus:border-purple-500 focus:ring-purple-500 focus:outline-none text-sm"
                  value={tone}
                  onChange={(e) => setLanguage(e.target.value)}
                >
                  <option>English</option>
                  <option>Hindi</option>
                  <option>Spanish</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ArrowUpDown className="h-4 w-4" />
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <label
                htmlFor="output-language"
                className="block text-sm font-medium text-gray-700"
              >
                Output language
              </label>
              <div className="mt-1 relative">
                <select
                  id="output-language"
                  className="block appearance-none w-full border p-1 rounded-lg focus:border-purple-500 focus:ring-purple-500 focus:outline-none text-sm"
                  value={formality}
                  onChange={(e) => setFormality(e.target.value)}
                >
                  <option>English (American)</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                  <ArrowUpDown className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-xs text-gray-600 mb-1">
              Formality
            </label>
            <div className="relative">
              <select className="w-full p-2 border border-gray-300 rounded-xl appearance-none text-sm">
                <option>Default</option>
              </select>
              <ChevronDown
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
            </div>
          </div>

          {/* Conditionally render "Clear All" and "Generate" buttons */}
          {hasAnyInputValue() && (
            <div className="relativ">
              <div className="absolute bottom-0 left-1/4 w-1/2 flex justify-between items-center p-4 bg-white shadow-md h-4">
                {/* Clear Button */}
                <button
                  onClick={handleClearAll}
                  className="w-full text-sm flex items-center justify-center"
                >
                  <X className="h-4 w-4 mr-2" /> Clear all inputs
                </button>

                {/* Generate Button */}
                {topic.trim() && (
                  <button
                    onClick={handleGenerate}
                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <Sparkles className="h-5 w-5 mr-2 text-white" /> Generate
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Right side - Output area */}
      <div className="w-2/5 p-6 bg-gray-50 overflow-y-auto">
        <div className="flex justify-between items-center space-x-2 mb-4">
          <div className="flex">
            <button
              onClick={() => setActiveTab("new")}
              className={`px-3 py-1 rounded text-sm ${
                activeTab === "new"
                  ? " text-purple-600 underline"
                  : " text-gray-600"
              }`}
            >
              New Outputs
            </button>
            <button
              onClick={() => setActiveTab("history")}
              className={`px-3 py-1 rounded text-sm${
                activeTab === "history"
                  ? " text-purple-600 underline"
                  : " text-gray-600"
              }`}
            >
              History
            </button>
          </div>
          <button
            onClick={handleClearHistory}
            className={`px-3 py-1 rounded text-sm${
              outputs.length === 0 ? " text-gray-600" : " text-red-600"
            }`}
            disabled={outputs.length === 0}
          >
            Clear
          </button>
        </div>

        {activeTab === "new" && (
          <div>
            {outputs.length > 0 ? (
              outputs.map((output, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow p-4 mb-4"
                >
                  <p className="text-gray-800 mb-4">{output}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <button
                        className="p-1 border rounded-lg hover:bg-gray-100"
                        onClick={() => handleFavorite(output)}
                      >
                        {favorites.includes(output) ? (
                          <Star className="h-4 w-4 text-purple-500" />
                        ) : (
                          <Star className="h-4 w-4 text-gray-500" />
                        )}
                      </button>
                      <button
                        className="p-1 border rounded-lg hover:bg-gray-100"
                        onClick={() => handleCopy(output)}
                      >
                        <Copy
                          className={`h-4 w-4 ${
                            copiedOutputs.includes(output)
                              ? "text-purple-500"
                              : "text-gray-500"
                          }`}
                        />
                      </button>
                      <button
                        className="p-1 border rounded-lg hover:bg-gray-100"
                        onClick={() => handleOpenInDocument(output)}
                      >
                        <FileText className="h-4 w-4 text-gray-500" />
                      </button>
                      <div className=" border rounded-lg hover:bg-gray-100 flex">
                        <button onClick={() => handleLike(output)}>
                          <ThumbsUp
                            className={`h-4 w-4 ${
                              likedOutputs.includes(output)
                                ? "text-purple-500"
                                : "text-gray-500"
                            }`}
                          />
                        </button>
                        <button onClick={() => handleDislike(output)}>
                          <ThumbsDown
                            className={`h-4 w-4 ${
                              dislikedOutputs.includes(output)
                                ? "text-purple-500"
                                : "text-gray-500"
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">
                      {message.timestamp ? timeAgo : "Just now"}
                    </span>{" "}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No new outputs available.</p>
            )}
          </div>
        )}

        {activeTab === "history" && (
          <div>
            {outputs.length > 0 ? (
              outputs.map((output, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow p-4 mb-4"
                >
                  <p className="text-gray-800 mb-4">{output}</p>
                  <div className="flex justify-between items-center">
                    <div className="flex space-x-2">
                      <button
                        className="p-1 border rounded-lg hover:bg-gray-100"
                        onClick={() => handleFavorite(output)}
                      >
                        {favorites.includes(output) ? (
                          <Star className="h-4 w-4 text-purple-500" />
                        ) : (
                          <Star className="h-4 w-4 text-gray-500" />
                        )}
                      </button>
                      <button
                        className="p-1 border rounded-lg hover:bg-gray-100"
                        onClick={() => handleCopy(output)}
                      >
                        <Copy
                          className={`h-4 w-4 ${
                            copiedOutputs.includes(output)
                              ? "text-purple-500"
                              : "text-gray-500"
                          }`}
                        />
                      </button>
                      <button
                        className="p-1 border rounded-lg hover:bg-gray-100"
                        onClick={() => handleOpenInDocument(output)}
                      >
                        <FileText className="h-4 w-4 text-gray-500" />
                      </button>
                      <div className=" border rounded-lg hover:bg-gray-100 flex">
                        <button onClick={() => handleLike(output)}>
                          <ThumbsUp
                            className={`h-4 w-4 ${
                              likedOutputs.includes(output)
                                ? "text-purple-500"
                                : "text-gray-500"
                            }`}
                          />
                        </button>
                        <button onClick={() => handleDislike(output)}>
                          <ThumbsDown
                            className={`h-4 w-4 ${
                              dislikedOutputs.includes(output)
                                ? "text-purple-500"
                                : "text-gray-500"
                            }`}
                          />
                        </button>
                      </div>
                    </div>
                    <span className="text-sm text-gray-500">
                      {message.timestamp ? timeAgo : "Just now"}
                    </span>{" "}
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-500">No history available.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ContentGenerator;

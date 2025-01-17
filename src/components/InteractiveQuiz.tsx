"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button"; // Replace with your actual shadcn Button path
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"; // Replace with your shadcn RadioGroup path
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"; // Replace with your shadcn Card path

interface InteractiveQuizProps {
    question: string;
    options: string[];
    correctAnswer: string;
}

const InteractiveQuiz: React.FC<InteractiveQuizProps> = ({
    question,
    options,
    correctAnswer,
}) => {
    const [selected, setSelected] = useState<string | undefined>(undefined);
    const [feedback, setFeedback] = useState("");

    const handleSubmit = () => {
        if (selected === correctAnswer) {
            setFeedback("Correct! 🎉");
        } else {
            setFeedback("Oops! Try again. 😞");
        }
    };

    return (
        <Card className="max-w-lg mx-auto shadow-md border mt-2">
            <CardHeader>
                <CardTitle className="text-xl font-semibold">{question}</CardTitle>
            </CardHeader>
            <CardContent>
                <RadioGroup
                    className="space-y-4"
                    value={selected}
                    onValueChange={setSelected}
                >
                    {options.map((option, index) => (
                        <div key={index} className="flex items-center space-x-3">
                            <RadioGroupItem value={option} id={`option-${index}`} />
                            <label
                                htmlFor={`option-${index}`}
                                className="text-sm font-medium"
                            >
                                {option}
                            </label>
                        </div>
                    ))}
                </RadioGroup>
                <Button
                    onClick={handleSubmit}
                    disabled={!selected}
                    className="mt-4 w-full"
                >
                    Submit
                </Button>
                {feedback && (
                    <div
                        className={`mt-3 text-center ${feedback.includes("Correct") ? "text-green-500" : "text-red-500"
                            }`}
                    >
                        {feedback}
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default InteractiveQuiz;

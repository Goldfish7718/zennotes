"use client"

import { Avatar ,AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Tooltip from "@/components/Tooltip";
import { Input } from "@/components/ui/input";
import { Heart, MessageCircle, Repeat, SendHorizonal } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Home() {

  const [likes, setLikes] = useState(42)
  const router = useRouter()

  const handleLike = () => {
    if (likes == 42) setLikes(43)
    else setLikes(42)
  }

  return (
    <div>
      <div id="header" className="flex flex-col items-center mt-40 md:mt-32 md:flex-row md:justify-around">
        <div className="text-center md:text-left">
          <h1 className="text-6xl">Zennotes</h1>
          <p>Your ultimate companion to practice mindfulness. <br />Connect. Practice. Enlighten.</p>
        </div>

        <Card className="my-8 w-4/5 sm:w-2/3 md:w-1/3">
          <CardHeader>
            <div className="flex flex-row items-center">
              <Avatar>
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <CardTitle className="mx-2 hover:underline hover:cursor-pointer">John Doe</CardTitle>
            </div>
          </CardHeader>
          <Separator />

          <CardContent className="p-4">
            <p>Believe nothing, no matter where you read it, or who said it, no matter if I have said it, unless it agrees with your own reason and your own common sense. <br /> - Buddha</p>
            <div className="my-2">
              <Badge variant='outline' className="mx-1">buddha</Badge>
              <Badge variant='outline' className="mx-1">meditation</Badge>
            </div>
            <Tooltip label="self-growth">
              <Button variant="badge">
                🌱
              </Button>
            </Tooltip>
          </CardContent>
          <Separator />

          <div className="flex flex-row justify-evenly items-center py-2">
            <Tooltip label="Heart">
              <Button variant='ghost' className="flex flex-row items-center p-2" onClick={handleLike}>
                <Heart size={18} className={`mx-1 ${likes == 43 && 'text-red-700'}`} /> 
                {likes}
              </Button>
            </Tooltip>
            <Tooltip label="Quote">
              <Button variant='ghost' className="flex flex-row items-center p-2">
                <MessageCircle size={18} className="mx-1" /> 
                20
              </Button>
            </Tooltip>
            <Tooltip label="Repost">
              <Button variant='ghost' className="flex flex-row items-center p-2">
                <Repeat size={18} className="mx-1" /> 
                14
              </Button>
            </Tooltip>
          </div>

          <div className="flex">
            <Input  className="rounded-tl-none rounded-r-none" placeholder="Reply..."/>
            <Button className="rounded-tr-none rounded-l-none"><SendHorizonal size={18} className="m-2" /></Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

import { Avatar ,AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import Tooltip from "@/components/Tooltip";
import { Input } from "@/components/ui/input";
import { SendHorizonal } from "lucide-react";

export default function Home() {
  return (
    <div>
      <div id="header" className="flex flex-col items-center mt-40">
        <h1 className="text-6xl">Zennotes</h1>
        <p className="text-center">Your ultimate companion to practice mindfulness. <br />Connect. Practice. Enlighten.</p>

        <Card className="my-8 w-8/12">
          <CardHeader>
            <div className="flex flex-row items-center">
              <Avatar>
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <CardTitle className="mx-2">John Doe</CardTitle>
              {/* <div className="mx-2">
                <CardTitle>John Doe</CardTitle>
                <CardDescription>@meditating_john</CardDescription>
              </div> */}
            </div>
          </CardHeader>
          <Separator />

          <CardContent className="p-4">
            <p>Believe nothing, no matter where you read it, or who said it, no matter if I have said it, unless it agrees with your own reason and your own common sense. <br /> - Buddha</p>
            <div className="my-2">
              <Badge variant='outline'>buddha</Badge>
              <Badge variant='outline'>meditation</Badge>
            </div>
            <Tooltip label="self-growth">
              <Button variant="badge">
                🌱
              </Button>
            </Tooltip>
          </CardContent>
          <Separator />

          <div className="flex">
            <Input  className="rounded-tl-none rounded-r-none" placeholder="Reply..." />
            <Button className="rounded-tr-none rounded-l-none"><SendHorizonal size={18} className="m-2" /></Button>
          </div>
        </Card>
      </div>
    </div>
  );
}

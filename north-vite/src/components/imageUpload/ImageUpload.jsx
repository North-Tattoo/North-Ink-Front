/**
 * v0 by Vercel.
 * @see https://v0.dev/t/c3AbXl4JHHe
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import { ContextMenuTrigger, ContextMenuContent, ContextMenu } from "@/components/ui/context-menu"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

function ImageUpload() {
    return (
        <ContextMenu>
            <ContextMenuTrigger className="flex h-[250px] w-[400px] items-center justify-center rounded-md border border-dashed text-xl text-violet-100">
                Upload Images
            </ContextMenuTrigger>
            <ContextMenuContent className="w-64">
                <div className="p-4 grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="images">Images</Label>
                        <Input id="images" multiple type="file" />
                        <p className="text-sm text-gray-500 dark:text-gray-400">You have uploaded 3 images so far.</p>
                    </div>
                    <Button className="w-full" type="submit">
                        Upload
                    </Button>
                </div>
            </ContextMenuContent>
        </ContextMenu>
    )
}

export default ImageUpload;
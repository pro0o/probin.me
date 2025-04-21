import { ImageResponse } from "next/og"

export const runtime = "edge"

async function fetchGoogleFont(font: string, text: string) {
  const fontURL = `https://fonts.googleapis.com/css2?family=${font.replace(/\s/g, "+")}&text=${encodeURIComponent(text)}`
  const css = await fetch(fontURL).then(res => res.text())
  const match = css.match(/src: url\((https:\/\/[^)]+)\)/)
  if (!match) throw new Error("Font URL not found")
  const fontRes = await fetch(match[1])
  return fontRes.arrayBuffer()
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const title = searchParams.get("title") || "home"
  const text = `probin • ${title}`

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#111",
          color: "#fff",
          fontFamily: "Geist Mono",
          fontSize: 48,
          padding: "40px",
        }}
      >
        <span style={{ color: "#7BA5FF", marginRight: 16 }}>*</span>
        <span style={{ maxWidth: "90%", wordBreak: "break-word" }}>{text}</span>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Geist Mono",
          data: await fetchGoogleFont("Geist Mono", text),
          style: "normal",
        },
      ],
    }
  )
}

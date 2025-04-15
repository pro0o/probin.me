import { ImageResponse } from "next/og"

export const runtime = "edge"

async function loadGoogleFont(font: string, text: string) {
  const url = `https://fonts.googleapis.com/css2?family=${font.replace(
    /\s/g,
    "+"
  )}&text=${encodeURIComponent(text)}`

  const css = await fetch(url).then((res) => res.text())

  const match = css.match(/src: url\((https:\/\/[^)]+)\)/)

  if (!match) throw new Error("Font URL not found")

  const fontUrl = match[1]
  const fontRes = await fetch(fontUrl)
  return await fontRes.arrayBuffer()
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const title = searchParams.get("title")
  const text = title ? `probin • ${title}` : "probin • home"

  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#111",
          fontFamily: "Geist Mono",
          padding: "40px",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
            maxWidth: "90%",
          }}
        >
          <span
            style={{
              color: "#7BA5FF",
              fontSize: 48,
              flexShrink: 0,
            }}
          >
            *
          </span>
          <h1
            style={{
              fontSize: 48,
              color: "#fff",
              margin: 0,
              lineHeight: 1.2,
              wordBreak: "break-word",
              overflowWrap: "break-word",
              maxWidth: "100%",
            }}
          >
            {text}
          </h1>
        </div>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: "Geist Mono",
          data: await loadGoogleFont("Geist Mono", text),
          style: "normal",
        },
      ],
    }
  )
}

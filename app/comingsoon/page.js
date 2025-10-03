export default function ComingSoon() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100%",
        background: "linear-gradient(135deg, #e0f7fa, #fce4ec)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        textAlign: "center",
        fontFamily: `'Segoe UI', Tahoma, Geneva, Verdana, sans-serif`,
      }}
    >
      <div className="max-w-[800px] w-[90%] mx-auto">
        <img src="/coming.png" alt="coming-soon" loading="lazy" decoding="async" className="w-full" />
      </div>

      <h1
        className="font-bold"
        style={{ fontSize: "2.5rem", marginTop: "30px", color: "#333" }}
      >
        🚧 Coming Soon
      </h1>
      <p
        className="font-semibold"
        style={{
          fontSize: "1.1rem",
          color: "#555",
          maxWidth: 600,
          marginTop: 10,
        }}
      >
        We’re building something amazing for you. Stay tuned while we get it
        ready!
      </p>
    </div>
  );
}

const blocksToHtml = (blocks) => `
<table width="100%" cellpadding="0" cellspacing="0" style="background:#f3f4f6;padding:20px;">
  <tr>
    <td align="center">
      <table width="600" cellpadding="0" cellspacing="0" style="background:#ffffff;padding:24px;font-family:Arial,sans-serif;">

        ${blocks.map((b) => {
          const d = b.data;

          switch (b.type) {
            case "text":
              return `
              <tr>
                <td style="
                  font-size:${d.size}px;
                  color:${d.color};
                  font-weight:${d.bold ? "700" : "400"};
                  font-style:${d.italic ? "italic" : "normal"};
                  line-height:1.6;
                  padding-bottom:14px;
                ">
                  ${d.text}
                </td>
              </tr>`;

            case "image":
              return `
              <tr>
                <td style="padding:12px 0;">
                  <img
                    src="${d.url}"
                    alt="image"
                    width="100%"
                    style="display:block;max-width:100%;border-radius:8px;"
                  />
                </td>
              </tr>`;

            case "button":
              return `
              <tr>
                <td align="center" style="padding:16px;">
                  <table cellpadding="0" cellspacing="0" border="0">
                    <tr>
                      <td bgcolor="${d.bg}" style="border-radius:${d.radius}px;">
                        <a
                          href="${d.link}"
                          target="_blank"
                          style="
                            display:inline-block;
                            padding:12px 24px;
                            font-size:14px;
                            font-weight:600;
                            color:${d.color};
                            text-decoration:none;
                            border-radius:${d.radius}px;
                          "
                        >
                          ${d.text}
                        </a>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>`;

            case "divider":
              return `
              <tr>
                <td style="padding:20px 0;">
                  <hr style="border:1px solid #e5e7eb;" />
                </td>
              </tr>`;

            default:
              return "";
          }
        }).join("")}

      </table>
    </td>
  </tr>
</table>
`;

export default blocksToHtml;

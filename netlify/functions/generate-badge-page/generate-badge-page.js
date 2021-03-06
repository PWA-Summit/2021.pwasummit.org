/* eslint-disable require-jsdoc */
const { builder } = require('@netlify/functions');

async function handler(event, context) {
  console.log(event);
  const ticketId = event.path.replace(/\/$/, '').split('/').pop().toUpperCase();

  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'text/html',
    },
    body: `<!DOCTYPE html>
    <html lang="en" style="height: 100%">
      <head>
        <meta charset="UTF-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>I'm attending PWA Summit, October 6-7</title>
        <link rel="icon" type="image/svg+xml" href="/assets/logo.svg" />
        <meta property="og:title" content="Join me at free online PWA Summit, Oct 6 & 7" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pwasummit.org/" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/pwasummit/image/upload/pwasummit/2021/${ticketId}.png"
        />
        <meta
          property="og:description"
          content="This is a digital badge confirming my participation in PWA Summit 2021 - a free, online, single-track conference focused on helping everyone succeed with Progressive Web Apps. Get your ticket here ->"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@pwasummit" />
        <script src="https://js.tito.io/v2/with/inline" async></script>
        <style>
          body {
            background-color: #108484;
            background-image: url(https://res.cloudinary.com/pwasummit/image/upload/pwasummit/2021/${ticketId}.png);
            background-position: center top;
            background-repeat: no-repeat;
            background-size: contain;
            height: 100%;
            margin: 0;
            font-family: Arial, Helvetica, sans-serif;
          }
    
          tito-button {
            width: 100%;
          }
          .tito-widget-button {
            color: #ffffff;
            background-color: #255288;
            font-size: 2rem;
            border: none;
            border-radius: 5px;
            padding: 1rem 2rem;
            box-shadow: 0 2px 5px rgb(0 0 0/ 0.3);
          }
          .tito-widget-button:active {
            transform: translate(1px, 1px);
          }
          .tito-widget-button:hover {
            box-shadow: 0 0 10px rgb(0 0 0/ 0.3);
          }
          .placeholder {
            position: absolute;
            top: 1em;
            left: 2em;
            right: 2em;
          }
          .date {
            color: #ffffff;
            font-size: 3rem;
            position: absolute;
            margin-top: 0.15em;
            right: 0;
          }
    
          @media (max-width: 770px) {
            .placeholder {
              bottom: 1em;
              top: auto;
              text-align: center;
            }
            .tito-widget-button {
              width: 100%;
            }
            .date {
              position: static;
              margin-bottom: 0.5em;
              font-size: 2.5em;
            }
          }
        </style>
      </head>
      <body>
        <div class="placeholder">
          <div class="date">October 6 & 7, Online</div>
          <tito-button event="pwasummit/2021"
            >Get your free ticket</tito-button
          >
          <noscript>
            <a class="tito-widget-button" href="https://ti.to/pwasummit/2021/preview">Get your free ticket</a>
          </noscript>
        </div>
      </body>
    </html>`,
  };
}

exports.handler = builder(handler);

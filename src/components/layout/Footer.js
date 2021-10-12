import React from 'react'
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

export const Footer = ({ config }) => {
  return (
    <footer css={footerStyle}>
      <div className="container">
        <p className="logo">{config.sitename ? config.sitename : 'Loading'}</p>
        <ul className="user_links">
          {config.userLinks &&
            config.userLinks.map((link) => (
              <li key={link.label}>
                <a href={link.url} target="_blank" rel="noopener noreference">
                  <i className={link.icon}></i>
                </a>
              </li>
            ))}
        </ul>
        <p className="copyright">
          &copy; 2021 chocolat{' '}
          <a
            href="https://github.com/chocolat5/react-landing-page-template"
            target="_blank"
            rel="noopener noreference"
          >
            React Landing Page Template
          </a>
          . Created by{' '}
          <a
            href="https://github.com/chocolat5"
            target="_blank"
            rel="noopener noreference"
          >
            chocolat
          </a>
          .
        </p>
      </div>
    </footer>
  )
}

const footerStyle = css`
  padding: 56px 0;
  color: #fff;
  background-color: #000;
  z-index: 1000;

  .logo {
    font-size: 1.8rem;
    font-weight: bold;
    letter-spacing: 0.1em;
  }

  .copyright {
    margin-top: 24px;
    padding-top: 24px;
    border-top: 1px solid #444;
    font-size: 1.2rem;
    letter-spacing: 0.05em;
    a {
      color: #fff;
    }
  }

  .user_links {
    display: flex;
    margin-top: 12px;
    li {
      margin: 0 4px;
    }
    a {
      &:hover {
        opacity: 0.7;
      }
    }
    .fa {
      color: #fff;
      font-size: 2.2rem;
    }
  }
`

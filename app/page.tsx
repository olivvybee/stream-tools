import Link from 'next/link';
import styles from './page.module.css';

const Homepage = () => (
  <div>
    <h1>olivvybee's streaming tools</h1>

    <ul>
      <li>
        <Link href="/message">Message</Link> - use the <code>text</code> query
        parameter to set the message
      </li>
    </ul>
  </div>
);

export default Homepage;

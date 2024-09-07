# Wise Wealth

#### Video Demo: <(https://www.youtube.com/watch?v=baidVOLSKuw)>

#### Description: Wise Wealth is an application designed to simplify financial organization, enabling users to efficiently manage and view their monthly expenses. With a focus on user experience, the app offers an intuitive approach to categorizing expenses, displaying a real-time total balance for a clear understanding of financial standing.

<h1>Wise Wealth</h1>
<hr>
<ol>
  <li>
    <strong>Motivations</strong>
    <ul>
      <li>Observing the need for more effective financial control, I have developed Wise Wealth, an app designed to help users track and categorize their monthly expenses.</li>
      <li>This app was initially created for personal use, aiming to assist in managing my money inflows and outflows.</li>
      <li>Opting for a web application provided quick and easy access, while the use of <code>localStorage</code> ensures that user information is stored locally in the browser, keeping the balance always available.</li>
    </ul>
  </li>

  <li>
    <strong>Functionality</strong>
    <ul>
      <li>
        <strong>Input Fields and Display Area</strong>
        <ul>
          <li>In the input fields, the user enters the transaction description, amount, category, and type (income or expense).</li>
          <li>Upon clicking the "Insert Data" button, this information is rendered in the display area on the right side of the screen, where transactions are organized by month.</li>
          <li>Users can navigate between different months to view past or future transactions and have the option to remove transactions as needed.</li>
        </ul>
      </li>

<li>
        <strong>Navbar</strong>
        <ul>
          <li>In the navigation bar (navbar), the user has access to several functionalities:</li>
          <li><strong>How to Use:</strong> A link that opens a modal with detailed instructions on how to use the app.</li>
          <li><strong>Support:</strong> A link that redirects the user to my personal WhatsApp, allowing them to send a message directly to report issues with the app.</li>
          <li><strong>Endorse Us:</strong> A button that redirects to my professional Instagram, where users can check other projects that I have developed.</li>
        </ul>
      </li>

<li>
        <strong>Footer</strong>
        <ul>
          <li>In the footer, the user can access information about the privacy policy and terms of use, both available via modals that will pop up on the screen upon clicking.</li>
          <li>Additionally, there's a link to my Instagram, where credits to the developer are available.</li>
        </ul>
      </li>
    </ul>

  </li>

  <li>
    <strong>Concepts</strong>
    <ul>
      <li><strong>Local Storage:</strong> The code uses the browser's <code>localStorage</code> to persist transaction data, ensuring that information is retained even after the page is closed.</li>
      <li><strong>Object Manipulation:</strong> The creation of <code>Transaction</code> objects represents each transaction with its specific properties (id, description, amount, type, category). This helps with organizing and managing data.</li>
      <li><strong>Arrays and Objects:</strong> Data is structured in arrays and objects to store transactions and organize information by month.</li>
      <li><strong>DOM:</strong> The user interface is manipulated through the DOM (Document Object Model), allowing the creation and dynamic updating of HTML elements.</li>
      <li><strong>Events:</strong> User interaction with the application is managed through events, such as button clicks, which trigger specific functions.</li>
      <li><strong>Functions:</strong> Functions are used to encapsulate specific functionalities, like adding transactions, calculating the balance, displaying transactions on the screen, etc.</li>
      <li><strong>Conditional Logic:</strong> Conditional structures (<code>if/else</code>) are used to make decisions, such as determining whether a transaction is an income or an expense or if the balance is positive or negative.</li>
      <li><strong>Formatting:</strong> The code uses methods to format numbers and dates for clear and consistent presentation of monetary values and dates.</li>
    </ul>
  </li>
</ol>

<h2>Project Structure</h2>

<h3>HTML</h3>

<ol>
  <li>
    <strong>Basic Structure</strong>
    <ul>
      <li>The HTML document uses the <code>&lt;!DOCTYPE html&gt;</code> tag to ensure compatibility with HTML5.</li>
      <li>The document language is set to English (<code>lang="EN"</code>).</li>
    </ul>
  </li>

  <li>
    <strong>Header (<code>&lt;head&gt;</code>)</strong>
    <ul>
      <li><strong>Essential Metadata:</strong> Uses UTF-8 charset and the viewport meta tag to ensure responsiveness.</li>
      <li><strong>Styling:</strong> References an external stylesheet <code>style.css</code> and external fonts from Google Fonts (Poppins and Source Sans 3).</li>
      <li><strong>Favicon:</strong> The app icon is loaded with the <code>wwlogo.png</code> file from the assets folder.</li>
      <li><strong>Title:</strong> The page title is "Wise Wealth".</li>
    </ul>
  </li>

  <li>
    <strong>Body of the Page (<code>&lt;body&gt;</code>)</strong>
    <ul>
      <li>
        <strong>Header and Navigation (<code>&lt;header&gt; &lt;nav&gt;</code>)</strong>
        <ul>
          <li><strong>Logo:</strong> Includes the <code>WW.png</code> logo.</li>
          <li>
            <strong>Links:</strong>
            <ul>
              <li>"How to Use?": Opens a modal with usage instructions.</li>
              <li>"Support": Redirects to WhatsApp for support.</li>
              <li>"Endorse Us": Button with a link to my Instagram.</li>
            </ul>
          </li>
        </ul>
      </li>

<li>
        <strong>Main Content (<code>&lt;main&gt;</code>)</strong>
        <ul>
          <li>
            <strong>Left Container:</strong>
            <ul>
              <li>Welcome message and dynamic balance display.</li>
              <li>Transaction Form with fields for description, amount, and category.</li>
              <li>Insert Button to add transactions.</li>
            </ul>
          </li>

<li>
            <strong>Right Container:</strong>
            <ul>
              <li>Month controls and detailed view of monthly transactions.</li>
            </ul>
          </li>
        </ul>
      </li>

<li>
        <strong>Modals</strong>
        <ul>
          <li><strong>"How to Use?" Modal:</strong> Explains app features.</li>
          <li><strong>Privacy Policy Modal:</strong> Clarifies that the information is stored locally and not shared.</li>
          <li><strong>Terms of Use Modal:</strong> Defines rules for using the app.</li>
        </ul>
      </li>

<li>
        <strong>Footer (<code>&lt;footer&gt;</code>)</strong>
        <ul>
          <li>Copyright information and link to the developer's Instagram.</li>
          <li>Links to the privacy policy and terms of use.</li>
        </ul>
      </li>
    </ul>

  </li>
</ol>

<h3>CSS</h3>

<ol>
  <li>
    <strong>CSS Variables</strong>
    <ul>
      <li>Defines variables for main fonts (<code>--font-general</code> and <code>--font-details</code>).</li>
    </ul>
  </li>

  <li>
    <strong>General Styles</strong>
    <ul>
      <li>Applies a default font and adjusts letter spacing and font weight.</li>
      <li>Defines styles for the <code>body</code>, including background color and minimum height.</li>
    </ul>
  </li>

  <li>
    <strong>Navigation</strong>
    <ul>
      <li>Defines a flexible layout and styles for navigation items and buttons.</li>
    </ul>
  </li>

  <li>
    <strong>Main Layout</strong>
    <ul>
      <li>Organizes the main content with flexbox.</li>
      <li>Styles the left and right containers, including forms and expense details.</li>
    </ul>
  </li>

  <li>
    <strong>Expense Details</strong>
    <ul>
      <li>Defines styles for displaying expense details and icons.</li>
    </ul>
  </li>

  <li>
    <strong>Footer</strong>
    <ul>
      <li>Styles the footer with a white background and top border.</li>
    </ul>
  </li>

  <li>
    <strong>Modals</strong>
    <ul>
      <li>Defines styles for modals, overlay, and close button.</li>
    </ul>
  </li>

  <li>
    <strong>Responsiveness</strong>
    <ul>
      <li>Adjusts layout and styles for smaller screens with media queries.</li>
    </ul>
  </li>
</ol>

<h3>JavaScript</h3>

<ol>
  <li>
    <strong>Variables and Initialization</strong>
    <ul>
      <li><code>counter</code>: Retrieves the counter value from localStorage or initializes it as 0.</li>
      <li><code>transactions</code>: Retrieves the list of transactions from localStorage or initializes it as an empty array.</li>
      <li><code>balance</code>: Tracks the user's balance.</li>
    </ul>
  </li>

  <li>
    <strong>DOM Elements</strong>
    <ul>
      <li>Selects DOM elements like transaction input fields, insert button, and display area.</li>
    </ul>
  </li>

  <li>
    <strong>Event Listeners</strong>
    <ul>
      <li>Adds event listeners to handle button clicks and modal interactions.</li>
    </ul>
  </li>

  <li>
  <strong>Functions</strong>
  <ul>
    <li><code>addTransaction()</code>: Adds a transaction to the display and updates localStorage.</li>
    <li><code>renderTransactions()</code>: Dynamically updates the transaction display based on the selected month.</li>
    <li><code>removeTransaction()</code>: Deletes a transaction from the list and localStorage.</li>
  </ul>
</li>

<li>
  <strong>LocalStorage Interaction</strong>
  <ul>
    <li>Data is saved, retrieved, and removed from <code>localStorage</code> to ensure persistence between sessions.</li>
  </ul>
</li>

<li>
  <strong>Dynamic UI Updates</strong>
  <ul>
    <li>The user interface is updated dynamically, with functions that change the balance and transaction list in response to user actions.</li>
  </ul>
</li>

<h3>Conclusion</h3>
<p>
Wise Wealth was developed with the goal of providing a simple and effective tool for personal financial management. Through its intuitive interface and practical features, such as transaction categorization and dynamic balance updates, the app makes it easier to organize monthly finances.
Wise Wealth not only fulfills its role in helping with financial control, but also demonstrates the ability to build a responsive and user-friendly web application, designed to solve everyday problems.</p>
</ol>

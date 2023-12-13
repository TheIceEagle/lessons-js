<header>
  <h3>Simple, traffic-based pricing</h3>
  <p>
    <span class="text-1">Sign-up for our 30-day trial.</span>
    <span class="text-2">No credit card required.</span>
  </p>
</header>

<style>
  header {
    margin: clamp(5.625rem, 5.3207rem + 1.5217vw, 6.5rem) 1.5rem
      clamp(4rem, 3.3913rem + 3.0435vw, 5.75rem) 1.5rem;
    text-align: center;

    & h3 {
      margin-bottom: clamp(0.5rem, 0.413rem + 0.4348vw, 0.75rem);
      text-align: center;
      font-size: clamp(1.25rem, 1.0761rem + 0.8696vw, 1.75rem);
      font-style: normal;
      font-weight: 800;
      line-height: normal;
    }

    & p {
      color: var(--text-secondary-color);
      justify-content: center;
      font-size: clamp(0.8125rem, 0.769rem + 0.2174vw, 0.9375rem);
      font-style: normal;
      font-weight: 600;
      line-height: 176.923%;
      display: flex;
      flex-wrap: wrap;

      & *:not(:last-child)::after {
        content: "\00A0";
      }
    }
  }
</style>

<script lang="ts">
  import SupportersList from "./SupportersList.svelte";
  import OverviewsList from "./OverviewsList.svelte";
  import type {Overview, Supporter} from "../types";
  import {onMount} from "svelte";

  let supporters: Supporter[] = [
        {
            id: crypto.randomUUID(),
            user: "@nathanf",
            platform: "facebook",
            amount: 1987,
            label: "Followers",
            diff: 12,
        },
        {
            id: crypto.randomUUID(),
            user: "@nathanf",
            platform: "twitter",
            amount: 1044,
            label: "Followers",
            diff: 99,
        },
        {
            id: crypto.randomUUID(),
            user: "@realnathanf",
            platform: "instagram",
            amount: 11123,
            label: "Followers",
            diff: 1099,
        },
        {
            id: crypto.randomUUID(),
            user: "Nathan F.",
            platform: "youtube",
            amount: 8239,
            label: "SUBSCRIBERS",
            diff: -144,
        },
    ];

    const overviews: Overview[] = [
        {
            id: crypto.randomUUID(),
            name: "Page Views",
            platform: "facebook",
            amount: 87,
            diff: 3,
        },
        {
            id: crypto.randomUUID(),
            name: "Likes",
            platform: "facebook",
            amount: 52,
            diff: -2,
        },
        {
            id: crypto.randomUUID(),
            name: "Likes",
            platform: "instagram",
            amount: 5462,
            diff: 2257,
        },
        {
            id: crypto.randomUUID(),
            name: "Profile Views",
            platform: "instagram",
            amount: 52341,
            diff: 1375,
        },
        {
            id: crypto.randomUUID(),
            name: "Retweets",
            platform: "twitter",
            amount: 117,
            diff: 303,
        },
        {
            id: crypto.randomUUID(),
            name: "Likes",
            platform: "twitter",
            amount: 507,
            diff: 553,
        },
        {
            id: crypto.randomUUID(),
            name: "Likes",
            platform: "youtube",
            amount: 107,
            diff: -19,
        },
        {
            id: crypto.randomUUID(),
            name: "Total Views",
            platform: "youtube",
            amount: 1407,
            diff: -12,
        },
    ];

    onMount(() => {
        const timerId = setTimeout(() => {
            supporters = [{...supporters[0], amount: 2000}, ...supporters.slice(1)]
        }, 3000)

        return () => clearTimeout(timerId)
    })
</script>

<main>
    <div class="outer-container">
        <div class="inner-container">
            <section class="supporters">
                <SupportersList list={supporters}/>
            </section>
            <section class="overview">
                <h3>Overview - Today</h3>
                <OverviewsList {overviews}/>
            </section>
        </div>
    </div>
</main>

<style>
    main {
        margin-top: clamp(-6.75rem, 0.6555rem - 10.5793vw, -1.5rem);
        padding: 0 1.5rem clamp(2.8125rem, 1.8687rem + 4.0268vw, 4.6875rem) 1.5rem;
        box-sizing: border-box;
    }

    .outer-container {
        container: main / inline-size;
        max-width: var(--container-max-width);
        margin-left: auto;
        margin-right: auto;
    }

    .inner-container {
        display: flex;
        flex-direction: column;
    }

    .supporters {
        margin-bottom: 2.875rem;
    }

    .overview {
        & h3 {
            color: var(--text-secondary-color);
            font-size: 1.5rem;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
            margin-bottom: 1.5rem;
        }
    }
</style>

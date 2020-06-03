<script>
	import { createUrl } from '../utils';
	import PageTitle from '../components/PageTitle.svelte';
</script>

<article class="vh-100 bg-primary">
	<PageTitle title="Our Story" />
	<section class="container">
		<div class="row">
			<div class="col garamond">
				<p>
					We met in highschool through our youth group at Christ's Church, Federal Way. We first expressed our
					feelings for the other during college and began dating immediately after graduation, May, 2019.
				</p>
				<img src="{createUrl('story/dating.jpg')}" alt="" class="img-fluid card">
				<p>
					During his senior year, Connor regularly sent letters to Deborah, telling the story of their
					friendship. After we both graduated, Connor continued to write these letters, culminating in a
					proposal letter on December 12th, 2019. Deborah said yes!
				</p>
				<img src="{createUrl('story/proposal.jpg')}" alt="The proposal" class="img-fluid card">
				<p>
					We chose Christ's Church as our wedding destination because it has played a central role in our
					relationship. We have enjoyed serving together in youth ministry, worship, and most recently,
					pre-school. We enjoy walking together, pranking our friends, and attempting to cook. Most of all, we
					love our God and love to share all He is doing in our lives.
				</p>
			</div>
		</div>
	</section>
</article>

<style>
	article {
		overflow: auto;
	}

	.container {
		max-width: 640px;
	}

	p {
		font-size: 20px;
	}
</style>
<?php if (count(get_included_files()) == 1) {
    ('Direct access not permitted.');
    require_once __DIR__ . '/../Templates/Header.php';
}?>
<tr>
	<td></td>
	<td>
		<p>Welcome
			<?= $user['name']; ?>,</p>

		<p>We are glad you signed up for our web app. Hope you enjoy.</p>

		<p>The Team</p>
	</td>
</tr>
</table>
<?php
    require_once __DIR__ . '/../Templates/Footer.php';
?>
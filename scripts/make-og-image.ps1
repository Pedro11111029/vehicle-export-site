# Generates public/og-image.jpg (1200x630) from the brand in src/config/site.ts.
# Run: powershell -ExecutionPolicy Bypass -File scripts/make-og-image.ps1
$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

$out = [System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..\public\og-image.jpg'))
$w = 1200
$h = 630

$bmp = New-Object System.Drawing.Bitmap($w, $h)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::AntiAlias
$g.TextRenderingHint = [System.Drawing.Text.TextRenderingHint]::AntiAliasGridFit
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic

# Background gradient: deep navy -> steel blue
$rect = New-Object System.Drawing.Rectangle(0, 0, $w, $h)
$c1 = [System.Drawing.Color]::FromArgb(13, 27, 42)
$c2 = [System.Drawing.Color]::FromArgb(35, 62, 90)
$bg = New-Object System.Drawing.Drawing2D.LinearGradientBrush -ArgumentList $rect, $c1, $c2, 35.0
$g.FillRectangle($bg, $rect)

# Decorative glows
$glow = New-Object System.Drawing.SolidBrush -ArgumentList ([System.Drawing.Color]::FromArgb(28, 224, 123, 38))
$g.FillEllipse($glow, 760, -180, 620, 620)
$glow2 = New-Object System.Drawing.SolidBrush -ArgumentList ([System.Drawing.Color]::FromArgb(16, 255, 255, 255))
$g.FillEllipse($glow2, 980, 380, 360, 360)

# Accent bar
$accent = New-Object System.Drawing.SolidBrush -ArgumentList ([System.Drawing.Color]::FromArgb(224, 123, 38))
$g.FillRectangle($accent, 80, 96, 72, 7)

# Fonts
$fontEyebrow = New-Object System.Drawing.Font -ArgumentList 'Segoe UI', 19, ([System.Drawing.FontStyle]::Bold)
$fontTitle = New-Object System.Drawing.Font -ArgumentList 'Segoe UI', 60, ([System.Drawing.FontStyle]::Bold)
$fontSub = New-Object System.Drawing.Font -ArgumentList 'Segoe UI', 26, ([System.Drawing.FontStyle]::Regular)
$fontStat = New-Object System.Drawing.Font -ArgumentList 'Segoe UI', 22, ([System.Drawing.FontStyle]::Bold)
$fontSmall = New-Object System.Drawing.Font -ArgumentList 'Segoe UI', 17, ([System.Drawing.FontStyle]::Regular)

$white = [System.Drawing.Brushes]::White
$softWhite = New-Object System.Drawing.SolidBrush -ArgumentList ([System.Drawing.Color]::FromArgb(198, 255, 255, 255))
$accentText = New-Object System.Drawing.SolidBrush -ArgumentList ([System.Drawing.Color]::FromArgb(245, 224, 123, 38))

# Copy (middle dot built from its code point so this script stays pure ASCII)
$sep = [char]0x00B7
$g.DrawString("VEHICLE EXPORT  $sep  SINCE 2010", $fontEyebrow, $accentText, 80, 122)
$g.DrawString('Global Auto Trading', $fontTitle, $white, 76, 196)
$g.DrawString("Cars  $sep  Trucks  $sep  New Energy Vehicles", $fontSub, $softWhite, 80, 340)
$g.DrawString("Worldwide shipping  $sep  FOB / CIF / DDP", $fontSmall, $softWhite, 80, 388)

# Divider
$linePen = New-Object System.Drawing.Pen -ArgumentList ([System.Drawing.Color]::FromArgb(55, 255, 255, 255)), 1
$g.DrawLine($linePen, 80, 444, 1120, 444)

# Stats
$g.DrawString('15+', $fontStat, $white, 80, 470)
$g.DrawString('years exporting', $fontSmall, $softWhite, 80, 505)
$g.DrawString('60+', $fontStat, $white, 330, 470)
$g.DrawString('countries served', $fontSmall, $softWhite, 330, 505)
$g.DrawString('5,000+', $fontStat, $white, 580, 470)
$g.DrawString('vehicles shipped', $fontSmall, $softWhite, 580, 505)

$g.DrawString('usedtruk.com', $fontStat, $accentText, 80, 562)

# Save as JPEG quality 92
$codecs = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders()
$codec = $codecs | Where-Object { $_.MimeType -eq 'image/jpeg' } | Select-Object -First 1
$params = New-Object System.Drawing.Imaging.EncoderParameters -ArgumentList 1
$params.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter -ArgumentList ([System.Drawing.Imaging.Encoder]::Quality), ([long]92)
$bmp.Save($out, $codec, $params)

$g.Dispose()
$bmp.Dispose()
Write-Output "Saved $out"
